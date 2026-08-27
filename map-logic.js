let mapLangCurrent = (navigator.language || navigator.userLanguage || '').startsWith('ja') ? 'ja' : 'en';
let mapScaleCurrent = 1;
let mapTransX = 0;
let mapTransY = 0;

let mapDragIsDragging = false;
let mapDragIsMoved = false;
let mapPanBlocked = false;
let mapDragStartX = 0;
let mapDragStartY = 0;
let mapDragStartScreenX = 0;
let mapDragStartScreenY = 0;
const mapDragMoveThreshold = 6;

let mapTouchLastDist = 0;

let mapFilterActiveSet = new Set();

function mapViewIsMoved() {
    return mapDragIsMoved;
}

document.addEventListener('DOMContentLoaded', () => {
    document.dispatchEvent(new CustomEvent('map-data-ready'));
});

document.addEventListener('filter-selection-changed', (e) => {
    mapFilterActiveSet = e.detail.selectedSet;
    mapMarkerRender();
});

function appLangSwitch(lang) {
    mapLangCurrent = lang;
    appLangUpdateBtn();
    mapMarkerRender();

    document.dispatchEvent(new CustomEvent('app-lang-changed', {
        detail: { lang: mapLangCurrent }
    }));
}

function appLangUpdateBtn() {
    const buttons = document.querySelectorAll('.app-lang-switch button');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(`'${mapLangCurrent}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

const mapDataScale = 1.166;

const mapHomeWidth = 3840 / mapDataScale;
const mapHomeHeight = 2160 / mapDataScale;
let mapHomeBounds = {
    x: 2078 / mapDataScale - mapHomeWidth / 2,
    y: 714 / mapDataScale - mapHomeHeight / 2,
    w: mapHomeWidth,
    h: mapHomeHeight
};
const mapHomeMaxScale = 3.0;

function mapViewCenter() {
    const img = document.getElementById('map-view-image');
    if (!img || img.naturalWidth === 0) return;

    const windowW = document.documentElement.clientWidth;
    const windowH = document.documentElement.clientHeight;

    const scaleW = windowW / mapHomeBounds.w;
    const scaleH = windowH / mapHomeBounds.h;

    let defaultScale = Math.max(scaleW, scaleH) * 2.5;
    mapScaleCurrent = Math.min(defaultScale, mapHomeMaxScale);

    mapTransX = windowW / 2 - (mapHomeBounds.x + mapHomeBounds.w / 2) * mapScaleCurrent;
    mapTransY = windowH / 2 - (mapHomeBounds.y + mapHomeBounds.h / 2) * mapScaleCurrent;

    mapViewUpdateTransform();
}

function mapViewReset() {
    mapViewCenter();
}

function mapMarkerRender() {
    const markerLayer = document.getElementById('map-marker-layer');
    if (!markerLayer) return;

    markerLayer.innerHTML = '';

    locations.forEach((point) => {
        if (!mapFilterActiveSet.has(point.category)) {
            return;
        }

        const markerWrapper = document.createElement('div');
        markerWrapper.className = 'map-marker-item';
        markerWrapper.style.left = `${point.x / mapDataScale}px`;
        markerWrapper.style.top = `${point.y / mapDataScale}px`;

        const catColor = categoryMaster[point.category] ? categoryMaster[point.category].color : '#FFC631';
        markerWrapper.style.setProperty('--active-color', catColor);

        if (typeof popupCurrentPoint !== 'undefined' && popupCurrentPoint === point) {
            markerWrapper.classList.add('active-marker');
        }

        const markerImg = document.createElement('img');
        const iconName = point.type ? `icon_${point.type}.png` : 'icon_unknown.png';
        markerImg.src = `./images/${iconName}`;
        markerImg.draggable = false;

        const tooltip = document.createElement('span');
        tooltip.className = 'map-marker-tooltip';
        tooltip.textContent = point.name[mapLangCurrent];

        markerWrapper.appendChild(markerImg);
        markerWrapper.appendChild(tooltip);

        point.domElement = markerWrapper;

        markerWrapper.addEventListener('click', (e) => {
            if (mapDragIsMoved) return;
            e.stopPropagation();

            document.dispatchEvent(new CustomEvent('popup-open', {
                detail: { point: point }
            }));
        });

        markerLayer.appendChild(markerWrapper);
    });
}

function mapViewZoomStep(direction) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const factor = direction > 0 ? 1.25 : 0.8;
    mapViewZoomByFactor(factor, centerX, centerY);
}

function mapViewZoomByFactor(factor, clientX, clientY) {
    const oldScale = mapScaleCurrent;
    let nextScale = mapScaleCurrent * factor;
    nextScale = Math.min(Math.max(nextScale, 0.15), 4.0);
    const actualFactor = nextScale / oldScale;

    mapTransX = clientX - (clientX - mapTransX) * actualFactor;
    mapTransY = clientY - (clientY - mapTransY) * actualFactor;
    mapScaleCurrent = nextScale;

    mapViewUpdateTransform();
}

function mapViewZoom(delta, clientX, clientY) {
    const zoomFactor = delta > 0 ? 1.1 : 1 / 1.1;
    mapViewZoomByFactor(zoomFactor, clientX, clientY);
}

function mapViewUpdateTransform() {
    const container = document.getElementById('map-view-container');
    container.style.transform = `translate3d(${mapTransX}px, ${mapTransY}px, 0) scale(${mapScaleCurrent})`;
    const label = document.getElementById('app-zoom-label');
    if (label) {
        label.textContent = `${Math.round(mapScaleCurrent * 100)}%`;
    }
}

function mapImageSetup() {
    const img = document.getElementById('map-view-image');
    img.style.width = `${img.naturalWidth / mapDataScale}px`;
    mapViewCenter();
}

function mapAppInit() {
    const img = document.getElementById('map-view-image');
    img.addEventListener('load', mapImageSetup);
    if (img.complete && img.naturalWidth > 0) {
        mapImageSetup();
    }

    window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    }, false);

    window.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        if (mapPanBlocked) return;
        mapDragIsDragging = true;
        mapDragIsMoved = false;
        mapDragStartX = e.clientX - mapTransX;
        mapDragStartY = e.clientY - mapTransY;
        mapDragStartScreenX = e.clientX;
        mapDragStartScreenY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!mapDragIsDragging) return;

        const dist = Math.hypot(e.clientX - mapDragStartScreenX, e.clientY - mapDragStartScreenY);
        if (dist > mapDragMoveThreshold) {
            mapDragIsMoved = true;
        }

        mapTransX = e.clientX - mapDragStartX;
        mapTransY = e.clientY - mapDragStartY;
        mapViewUpdateTransform();
    });

    window.addEventListener('mouseup', () => {
        mapDragIsDragging = false;
    });

    window.addEventListener('wheel', (e) => {
        mapViewZoom(-e.deltaY, e.clientX, e.clientY);
    }, { passive: false });

    window.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            if (mapPanBlocked) return;
            mapDragIsDragging = true;
            mapDragIsMoved = false;
            mapDragStartX = e.touches[0].clientX - mapTransX;
            mapDragStartY = e.touches[0].clientY - mapTransY;
            mapDragStartScreenX = e.touches[0].clientX;
            mapDragStartScreenY = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
            mapDragIsDragging = false;
            mapTouchLastDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && mapDragIsDragging) {
            const dist = Math.hypot(e.touches[0].clientX - mapDragStartScreenX, e.touches[0].clientY - mapDragStartScreenY);
            if (dist > mapDragMoveThreshold) {
                mapDragIsMoved = true;
            }
            mapTransX = e.touches[0].clientX - mapDragStartX;
            mapTransY = e.touches[0].clientY - mapDragStartY;
            mapViewUpdateTransform();
        } else if (e.touches.length === 2) {
            e.preventDefault();
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

            if (mapTouchLastDist > 0) {
                const factor = dist / mapTouchLastDist;
                mapViewZoomByFactor(factor, centerX, centerY);
            }
            mapTouchLastDist = dist;
        }
    }, { passive: false });

    window.addEventListener('touchend', () => {
        mapDragIsDragging = false;
        mapTouchLastDist = 0;
    });

    appLangUpdateBtn();
    mapMarkerRender();
}

document.addEventListener('map-data-ready', () => {
    mapFilterActiveSet = new Set(Object.keys(categoryMaster));
    mapAppInit();
});