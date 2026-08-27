let availableImages = [
    "./images/icon_ironprocessingstation.png",
    "./images/icon_largebridge.png",
    "./images/icon_lighthouse.png",
    "./images/icon_ropebridge.png",
    "./images/icon_smallbridge.png",
    "./images/icon_watchtower.png",
    "./images/icon_amaterasu.png",
    "./images/icon_ebisu.png",
    "./images/icon_hachiman.png",
    "./images/icon_inari.png",
    "./images/icon_jizo.png",
    "./images/icon_kannon.png",
    "./images/icon_ryujin.png",
    "./images/icon_tenjin.png",
    "./images/icon_aratani.png",
    "./images/icon_boat.png",
    "./images/icon_enjirou.png",
    "./images/icon_enjiroupier.png",
    "./images/icon_iwasaki.png",
    "./images/icon_onsen.png",
    "./images/icon_segi.png",
    "./images/icon_sosogi.png",
    "./images/icon_temple.png",
    "./images/icon_enemycamp.png",
    "./images/icon_minorenemycamp.png",
    "./images/icon_unknown.png"
];

let categoryMaster = {
    "special_project": {
        "ja": "特殊建造物",
        "en": "Special Projects",
        "color": "#2E7D32"
    },
    "shrine": {
        "ja": "神社",
        "en": "Shrines",
        "color": "#D81B60"
    },
    "ft": {
        "ja": "ファストトラベル",
        "en": "FastTravel",
        "color": "#0288D1"
    },
    "enemy": {
        "ja": "敵陣",
        "en": "Enemy Camp",
        "color": "#B71C1C"
    },
    "other": {
        "ja": "その他",
        "en": "Other",
        "color": "#546E7A"
    }
};

let typeList = [
    "ironprocessingstation",
    "largebridge",
    "lighthouse",
    "ropebridge",
    "smallbridge",
    "watchtower",
    "amaterasu",
    "ebisu",
    "hachiman",
    "inari",
    "jizo",
    "kannon",
    "ryujin",
    "tenjin",
    "aratani",
    "boat",
    "enjirou",
    "enjiroupier",
    "iwasaki",
    "onsen",
    "segi",
    "sosogi",
    "temple",
    "enemycamp",
    "unknown"
];

let locations = [
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 1606,
        "y": 1539,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x15\n- 竹 x60\n- 板 x48\n必要人員: 4",
            "en": "Resources:\n- Rope x15\n- Bamboo x60\n- Plank x48\nWorkers: 4"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 1565,
        "y": 1563,
        "name": {
            "ja": "マングローブの物見やぐら",
            "en": "Mangrove Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x25\n- 藁 x25\n- 丸太 x20\n- 板 x30\n必要人員: 5",
            "en": "Resources:\n- Bamboo x25\n- Straw x25\n- Log x20\n- Plank x30\nWorkers: 5"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 1588,
        "y": 1592,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x15\n- 竹 x60\n- 板 x48\n必要人員: 4",
            "en": "Resources:\n- Rope x15\n- Bamboo x60\n- Plank x48\nWorkers: 4"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 1600,
        "y": 1695,
        "name": {
            "ja": "灯台",
            "en": "Lighthouse"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 薪 x15\n- 油 x15\n必要人員: 8",
            "en": "Resources:\n- Chiseled Stone x50\n- Firewood x15\n- Oil x15\nWorkers: 8"
        }
    },
    {
        "category": "shrine",
        "type": "tenjin",
        "x": 1289,
        "y": 1799,
        "name": {
            "ja": "天神社",
            "en": "Medium Tenjin Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 上質な落葉樹の丸太 x8\n- 上質な落葉樹の板 x12\n- 樹皮 x12\n- 天神像 x1\n必要人員: 5\n\nお供え: 紙 x8",
            "en": "Resources:\n- Any Premium Log x8\n- Any Premium Plank x12\n- Bark x12\n- Tenjin Statue x1\nWorkers: 5\n\nOffering: Paper x8"
        }
    },
    {
        "category": "ft",
        "type": "boat",
        "x": 1654,
        "y": 1468,
        "name": {
            "ja": "群島の桟橋",
            "en": "Archipelago Pier"
        },
        "desc": {
            "ja": "最初に上陸する地点",
            "en": "Initial landing point"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 771,
        "y": 1469,
        "name": {
            "ja": "物見やぐら",
            "en": "Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x75\n- 藁 x50\n- 丸太 x40\n- 板 x60\n必要人員: 10",
            "en": "Resources:\n- Bamboo x75\n- Plank x60\n- Log x40\n- Straw x50\nWorkers: 10"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 1004,
        "y": 1704,
        "name": {
            "ja": "物見やぐら",
            "en": "Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x75\n- 藁 x50\n- 丸太 x40\n- 板 x60\n必要人員: 10",
            "en": "Resources:\n- Bamboo x75\n- Plank x60\n- Log x40\n- Straw x50\nWorkers: 10"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 791,
        "y": 1894,
        "name": {
            "ja": "物見やぐら",
            "en": "Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x75\n- 藁 x50\n- 丸太 x40\n- 板 x60\n必要人員: 10",
            "en": "Resources:\n- Bamboo x75\n- Plank x60\n- Log x40\n- Straw x50\nWorkers: 10"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 1068,
        "y": 1459,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x20\n- 竹 x80\n- 板 x48\n必要人員: 6",
            "en": "Resources:\n- Rope x20\n- Bamboo x80\n- Plank x48\nWorkers: 6"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 998,
        "y": 1584,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x20\n- 竹 x80\n- 板 x48\n必要人員: 6",
            "en": "Resources:\n- Rope x20\n- Bamboo x80\n- Plank x48\nWorkers: 6"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 932,
        "y": 1694,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x20\n- 竹 x80\n- 板 x48\n必要人員: 6",
            "en": "Resources:\n- Rope x20\n- Bamboo x80\n- Plank x48\nWorkers: 6"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 965,
        "y": 1726,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x20\n- 竹 x80\n- 板 x48\n必要人員: 6",
            "en": "Resources:\n- Rope x20\n- Bamboo x80\n- Plank x48\nWorkers: 6"
        }
    },
    {
        "category": "shrine",
        "type": "hachiman",
        "x": 1141,
        "y": 1437,
        "name": {
            "ja": "八幡神社",
            "en": "Medium Hachiman Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 上質な丸太全般 x8\n- 上質な板全般 x12\n- 樹皮 x12\n- 八幡像 x1\n必要人員: 5\n\nお供え: 鉄の矢 x5",
            "en": "Resources:\n- Any Premium Log x8\n- Any Premium Plank x12\n- Bark x12\n- Hachiman Statue x1\nWorkers: 5\n\nOffering: Iron Arrow x5"
        }
    },
    {
        "category": "shrine",
        "type": "tenjin",
        "x": 862,
        "y": 1618,
        "name": {
            "ja": "大きな天神社",
            "en": "Large Tenjin Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x10\n- 上質な落葉樹の丸太 x20\n- 樹皮 x15\n- 彫刻した石 x15\n- 天神像 x1\n必要人員: 8\n\nお供え: 紙 x15",
            "en": "Resources:\n- Premium Deciduous Log x10\n- Premium Deciduous Plank x20\n- Chiseled Stone x15\n- Bark x15\n- Tenjin Statue x1\nWorkers: 8\n\nOffering: Paper x15"
        }
    },
    {
        "category": "shrine",
        "type": "kannon",
        "x": 1075,
        "y": 1613,
        "name": {
            "ja": "大きな観音神社",
            "en": "Large Kannon Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: ろうそく x5",
            "en": "(No reconstruction required)\n\nOffering: Candle x5"
        }
    },
    {
        "category": "shrine",
        "type": "kannon",
        "x": 821,
        "y": 1731,
        "name": {
            "ja": "観音神社",
            "en": "Medium Kannon Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 竹のろうそく x3",
            "en": "(No reconstruction required)\n\nOffering: Bamboo Candle x3"
        }
    },
    {
        "category": "shrine",
        "type": "amaterasu",
        "x": 823,
        "y": 1801,
        "name": {
            "ja": "小さな天照神社",
            "en": "Small Amaterasu Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: どぶろく x1",
            "en": "(No reconstruction required)\n\nOffering: Doburoku x1"
        }
    },
    {
        "category": "special_project",
        "type": "smallbridge",
        "x": 710,
        "y": 1863,
        "name": {
            "ja": "密林の小さな橋",
            "en": "Jungle Small Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x20\n- 板 x40\n必要人員: 3",
            "en": "Resources:\n- Log x20\n- Plank x40\nWorkers: 3"
        }
    },
    {
        "category": "shrine",
        "type": "inari",
        "x": 633,
        "y": 1735,
        "name": {
            "ja": "稲荷神社",
            "en": "Medium Inari Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 調理した卵 x3",
            "en": "(No reconstruction required)\n\nOffering: Cooked Egg x3"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 619,
        "y": 1924,
        "name": {
            "ja": "密林の灯台 I",
            "en": "Jungle Lighthouse I"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 薪 x15\n- 油 x15\n必要人員: 8",
            "en": "Resources:\n- Chiseled Stone x50\n- Firewood x15\n- Oil x15\nWorkers: 8"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 751,
        "y": 1267,
        "name": {
            "ja": "密林の灯台 II",
            "en": "Jungle Lighthouse II"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 薪 x15\n- 油 x15\n必要人員: 8",
            "en": "Resources:\n- Chiseled Stone x50\n- Firewood x15\n- Oil x15\nWorkers: 8"
        }
    },
    {
        "category": "shrine",
        "type": "ryujin",
        "x": 660,
        "y": 1355,
        "name": {
            "ja": "小さな龍神社",
            "en": "Small Ryūjin Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x15\n- 上質な針葉樹の丸太 x10\n- 樹皮 x10\n- 龍神像 x1\n必要人員: 3\n\nお供え: 貝殻 x1",
            "en": "Resources:\n- Chiseled Stone x15\n- Premium Conifer Plank x10\n- Bark x10\n- Ryūjin Statue x1\nWorkers: 3\n\nOffering: Seashell x1"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 1051,
        "y": 1626,
        "name": {
            "ja": "海賊の野営地",
            "en": "Pirate Camp"
        },
        "desc": {
            "ja": "海賊の長、中尸\n敵陣解体/必要資源:\n- 鋤 x6\n- つるはし x5\n- 斧 x5\n必要人員: 8",
            "en": "Pirate Leader Chūshi\nDemolish/Resources:\n- Shovel x6\n- Pickaxe x5\n- Axe x5\nWorkers: 8"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 1534,
        "y": 1667,
        "name": {
            "ja": "盗賊の野営地",
            "en": "Bandit Camp"
        },
        "desc": {
            "ja": "盗賊の長、上尸\n敵陣解体/必要資源:\n- 鋤 x3\n- つるはし x3\n- 斧 x3\n必要人員: 2",
            "en": "Bandit Leader Jōshi\nDemolish/Resources:\n- Shovel x3\n- Pickaxe x3\n- Axe x3\nWorkers: 2"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 1007,
        "y": 913,
        "name": {
            "ja": "休火山の灯台 II",
            "en": "Dormant Volcano Lighthouse II"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 薪 x15\n- 油 x15\n必要人員: 8",
            "en": "Resources:\n- Chiseled Stone x50\n- Firewood x15\n- Oil x15\nWorkers: 8"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 1465,
        "y": 1028,
        "name": {
            "ja": "休火山の灯台 I",
            "en": "Dormant Volcano Lighthouse I"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 薪 x25\n- 油 x25\n必要人員: 10",
            "en": "Resources:\n- Chiseled Stone x50\n- Firewood x25\n- Oil x25\nWorkers: 10"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 1092,
        "y": 959,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x20\n- 竹 x80\n- 板 x48\n必要人員: 6",
            "en": "Resources:\n- Rope x20\n- Bamboo x80\n- Plank x48\nWorkers: 6"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 1166,
        "y": 995,
        "name": {
            "ja": "吊り橋",
            "en": "Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x20\n- 竹 x80\n- 板 x48\n必要人員: 6",
            "en": "Resources:\n- Rope x20\n- Bamboo x80\n- Plank x48\nWorkers: 6"
        }
    },
    {
        "category": "shrine",
        "type": "hachiman",
        "x": 987,
        "y": 1013,
        "name": {
            "ja": "大きな八幡神社",
            "en": "Large Hachiman Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 上質な落葉樹の丸太 x10\n- 上質な落葉樹の板 x20\n- 樹皮 x20\n- 彫刻した石 x15\n- 八幡像 x1\n必要人員: 8\n\nお供え: 鋼の矢 x5",
            "en": "Resources:\n- Premium Deciduous Log x10\n- Premium Deciduous Plank x20\n- Chiseled Stone x15\n- Bark x20\n- Hachiman Statue x1\nWorkers: 8\n\nOffering: Steel Arrow x5"
        }
    },
    {
        "category": "shrine",
        "type": "ebisu",
        "x": 1295,
        "y": 1032,
        "name": {
            "ja": "恵比寿神社",
            "en": "Medium Ebisu Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 質素な魚料理 x1",
            "en": "(No reconstruction required)\n\nOffering: Simple Fish Meal x1"
        }
    },
    {
        "category": "shrine",
        "type": "ryujin",
        "x": 1268,
        "y": 1189,
        "name": {
            "ja": "龍神社",
            "en": "Medium Ryūjin Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 上質な丸太全般 x8\n- 上質な板全般 x12\n- 樹皮 x12\n- 龍神像 x1\n必要人員: 5\n\nお供え: 貝殻 x3",
            "en": "Resources:\n- Any Premium Log x8\n- Any Premium Plank x12\n- Bark x12\n- Ryūjin Statue x1\nWorkers: 5\n\nOffering: Seashell x3"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 1132,
        "y": 1177,
        "name": {
            "ja": "休火山の物見やぐら",
            "en": "Dormant Volcano Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x50\n- 藁 x50\n- 丸太 x30\n- 板 x45\n必要人員: 5",
            "en": "Resources:\n- Bamboo x50\n- Plank x45\n- Log x30\n- Straw x50\nWorkers: 5"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 1118,
        "y": 1105,
        "name": {
            "ja": "浪人の野営地",
            "en": "Ronin Camp"
        },
        "desc": {
            "ja": "浪人の長、下尸\n敵陣解体/必要資源:\n- 鋤 x7\n- つるはし x7\n- 斧 x7\n必要人員: 10",
            "en": "Ronin Leader Geshi\nDemolish/Resources:\n- Shovel x7\n- Pickaxe x7\n- Axe x7\nWorkers: 10"
        }
    },
    {
        "category": "other",
        "type": "unknown",
        "x": 1543,
        "y": 1842,
        "name": {
            "ja": "商人の天秤棒",
            "en": "Trader Carrying Pole"
        },
        "desc": {
            "ja": "オブジェクトが設置されている",
            "en": "An object is placed"
        }
    },
    {
        "category": "shrine",
        "type": "jizo",
        "x": 1933,
        "y": 415,
        "name": {
            "ja": "小さな地蔵神社",
            "en": "Small Jizō Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x15\n- 上質な針葉樹の板 x10\n- 樹皮 x10\n- 地蔵像 x1\n必要人員: 4\n\nお供え: 菊の花 x2",
            "en": "Resources:\n- Chiseled Stone x15\n- Premium Conifer Plank x10\n- Bark x10\n- Jizō Statue x1\nWorkers: 4\n\nOffering: Chrysanthemum x2"
        }
    },
    {
        "category": "shrine",
        "type": "inari",
        "x": 2213,
        "y": 501,
        "name": {
            "ja": "小さな稲荷神社",
            "en": "Small Inari Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 調理した卵 x1",
            "en": "(No reconstruction required)\n\nOffering: Cooked Egg x1"
        }
    },
    {
        "category": "shrine",
        "type": "jizo",
        "x": 2359,
        "y": 635,
        "name": {
            "ja": "地蔵神社",
            "en": "Medium Jizō Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 菊の花 x5",
            "en": "(No reconstruction required)\n\nOffering: Chrysanthemum x5"
        }
    },
    {
        "category": "shrine",
        "type": "amaterasu",
        "x": 2789,
        "y": 606,
        "name": {
            "ja": "大きな天照神社",
            "en": "Large Amaterasu Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 焼酎 x1",
            "en": "(No reconstruction required)\n\nOffering: Shōchū x1"
        }
    },
    {
        "category": "shrine",
        "type": "amaterasu",
        "x": 2422,
        "y": 942,
        "name": {
            "ja": "天照神社",
            "en": "Medium Amaterasu Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 日本酒 x1",
            "en": "(No reconstruction required)\n\nOffering: Sake x1"
        }
    },
    {
        "category": "shrine",
        "type": "inari",
        "x": 2727,
        "y": 1112,
        "name": {
            "ja": "大きな稲荷神社",
            "en": "Large Inari Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x10\n- 上質な落葉樹の丸太 x20\n- 樹皮 x15\n- 彫刻した石 x15\n- 稲荷像 x1\n必要人員: 8\n\nお供え: 調理した卵 x5",
            "en": "Resources:\n- Premium Deciduous Log x10\n- Premium Deciduous Plank x20\n- Chiseled Stone x15\n- Bark x15\n- Inari Statue x1\nWorkers: 8\n\nOffering: Cooked Egg x5"
        }
    },
    {
        "category": "shrine",
        "type": "kannon",
        "x": 2232,
        "y": 1249,
        "name": {
            "ja": "小さな観音神社",
            "en": "Small Kannon Shrine"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x15\n- 上質な針葉樹の板 x10\n- 樹皮 x10\n- 観音像 x1\n必要人員: 4\n\nお供え: 竹のろうそく x1",
            "en": "Resources:\n- Chiseled Stone x15\n- Premium Conifer Plank x10\n- Bark x10\n- Kannon Statue x1\nWorkers: 4\n\nOffering: Bamboo Candle x1"
        }
    },
    {
        "category": "shrine",
        "type": "ebisu",
        "x": 3094,
        "y": 1627,
        "name": {
            "ja": "大きな恵比寿神社",
            "en": "Large Ebisu Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: きちんとした魚料理 x1",
            "en": "(No reconstruction required)\n\nOffering: Solid Fish Meal x1"
        }
    },
    {
        "category": "special_project",
        "type": "smallbridge",
        "x": 2127,
        "y": 539,
        "name": {
            "ja": "曽々木の小さな橋",
            "en": "Sosogi Small Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太全般 x12\n- 板全般 x20\n必要人員: 1",
            "en": "Resources:\n- Any Log x12\n- Any Plank x20\nWorkers: 1"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 2625,
        "y": 348,
        "name": {
            "ja": "山の物見やぐら",
            "en": "Mountain Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x25\n- 藁 x25\n- 丸太 x20\n- 板 x30\n必要人員: 3",
            "en": "Resources:\n- Any Log x20\n- Any Plank x30\n- Bamboo x25\n- Straw x25\nWorkers: 3"
        }
    },
    {
        "category": "shrine",
        "type": "ryujin",
        "x": 2018,
        "y": 820,
        "name": {
            "ja": "円次郎の龍神社の橋",
            "en": "Enjirō Ryūjin Shrine Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 御幣 x1\n- 石 x50\n- 丸太 x20\n- 板 x30\n- 龍神像 x1\n必要人員: 6\n\n建築すると大きな龍神社も完成する\nお供え: 貝殻 x5",
            "en": "Resources:\n- Small Gohei Wand x1\n- Stone x50\n- Any Log x20\n- Any Plank x30\n- Ryūjin Statue x1\nWorkers: 6\n\nBuilding this also completes the Large Ryūjin Shrine\nOffering: Seashell x5"
        }
    },
    {
        "category": "special_project",
        "type": "ironprocessingstation",
        "x": 2896,
        "y": 644,
        "name": {
            "ja": "岩崎村鉄鉱石加工所",
            "en": "Iron Ore Processing Station"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x35\n- 板 x50\n- 青銅 x20\n必要人員: 6",
            "en": "Resources:\n- Any Log x35\n- Any Plank x50\n- Bronze x20\nWorkers: 6"
        }
    },
    {
        "category": "special_project",
        "type": "largebridge",
        "x": 2868,
        "y": 823,
        "name": {
            "ja": "東部湿地帯地域の大橋",
            "en": "Eastern Swamp Large Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 藁 x50\n- 丸太 x60\n- 板 x100\n必要人員: 10",
            "en": "Resources:\n- Chiseled Stone x50\n- Straw x50\n- Any Log x60\n- Any Plank x100\nWorkers: 10"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 2384,
        "y": 1204,
        "name": {
            "ja": "千木村の物見やぐら",
            "en": "Segi Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x50\n- 藁 x50\n- 丸太 x30\n- 板 x45\n必要人員: 5",
            "en": "Resources:\n- Bamboo x50\n- Straw x50\n- Any Log x30\n- Any Plank x45\nWorkers: 5"
        }
    },
    {
        "category": "special_project",
        "type": "smallbridge",
        "x": 2252,
        "y": 969,
        "name": {
            "ja": "千木村の小さな橋",
            "en": "Segi Small Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x20\n- 板 x30\n必要人員: 5",
            "en": "Resources:\n- Any Log x20\n- Any Plank x30\nWorkers: 5"
        }
    },
    {
        "category": "special_project",
        "type": "largebridge",
        "x": 2445,
        "y": 1233,
        "name": {
            "ja": "河岸地域の大橋",
            "en": "River Bank Large Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 藁 x50\n- 丸太 x80\n- 板 x125\n必要人員: 15",
            "en": "Resources:\n- Chiseled Stone x50\n- Straw x50\n- Any Log x80\n- Any Plank x125\nWorkers: 15"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 1949,
        "y": 1349,
        "name": {
            "ja": "沿岸湿地帯地域の灯台",
            "en": "Coastal Swamp Lighthouse"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x60\n- 薪 x25\n- 油 x25\n必要人員: 12",
            "en": "Resources:\n- Chiseled Stone x60\n- Firewood x25\n- Oil x25\nWorkers: 12"
        }
    },
    {
        "category": "special_project",
        "type": "smallbridge",
        "x": 2471,
        "y": 1344,
        "name": {
            "ja": "荒谷村の小さな橋",
            "en": "Aratani Small Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x20\n- 板 x40\n必要人員: 3",
            "en": "Resources:\n- Any Log x20\n- Any Plank x40\nWorkers: 3"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 2673,
        "y": 1356,
        "name": {
            "ja": "寺の物見やぐら",
            "en": "Temple Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x75\n- 藁 x50\n- 丸太 x40\n- 板 x60\n必要人員: 10",
            "en": "Resources:\n- Any Log x40\n- Any Plank x60\n- Bamboo x75\n- Straw x50\nWorkers: 10"
        }
    },
    {
        "category": "special_project",
        "type": "ropebridge",
        "x": 2671,
        "y": 1403,
        "name": {
            "ja": "寺の吊り橋",
            "en": "Temple Rope Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 縄 x50\n- 竹 x200\n- 板 x100\n必要人員: 16",
            "en": "Resources:\n- Rope x50\n- Bamboo x200\n- Any Plank x100\nWorkers: 16"
        }
    },
    {
        "category": "special_project",
        "type": "smallbridge",
        "x": 2598,
        "y": 649,
        "name": {
            "ja": "中央平原地域の小さな橋",
            "en": "Central Plains Small Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x18\n- 板 x25\n必要人員: 5",
            "en": "Resources:\n- Any Log x18\n- Any Plank x25\nWorkers: 5"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 2327,
        "y": 858,
        "name": {
            "ja": "円次郎の物見やぐら",
            "en": "Enjirō Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x25\n- 藁 x25\n- 丸太 x20\n- 板 x30\n必要人員: 3",
            "en": "Resources:\n- Bamboo x25\n- Straw x25\n- Any Log x20\n- Any Plank x30\nWorkers: 3"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 1901,
        "y": 474,
        "name": {
            "ja": "灯台",
            "en": "Lighthouse"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x50\n- 薪 x15\n- 油 x15\n必要人員: 8",
            "en": "Resources:\n- Chiseled Stone x50\n- Oil x15\n- Firewood x15\nWorkers: 8"
        }
    },
    {
        "category": "special_project",
        "type": "ironprocessingstation",
        "x": 2202,
        "y": 1281,
        "name": {
            "ja": "鉄鉱石加工所",
            "en": "Iron Ore Processing Station"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x40\n- 板 x50\n- 青銅 x20\n必要人員: 12",
            "en": "Resources:\n- Any Log x40\n- Any Plank x50\n- Bronze x20\nWorkers: 12"
        }
    },
    {
        "category": "special_project",
        "type": "watchtower",
        "x": 2179,
        "y": 347,
        "name": {
            "ja": "物見やぐら",
            "en": "Watchtower"
        },
        "desc": {
            "ja": "必要資源:\n- 竹 x50\n- 藁 x50\n- 丸太 x30\n- 板 x45\n必要人員: 3",
            "en": "Resources:\n- Any Log x30\n- Any Plank x45\n- Bamboo x50\n- Straw x50\nWorkers: 3"
        }
    },
    {
        "category": "special_project",
        "type": "lighthouse",
        "x": 1886,
        "y": 1051,
        "name": {
            "ja": "灯台",
            "en": "Lighthouse"
        },
        "desc": {
            "ja": "必要資源:\n- 彫刻した石 x55\n- 薪 x20\n- 油 x20\n必要人員: 10",
            "en": "Resources:\n- Chiseled Stone x55\n- Firewood x20\n- Oil x20\nWorkers: 10"
        }
    },
    {
        "category": "special_project",
        "type": "smallbridge",
        "x": 2345,
        "y": 947,
        "name": {
            "ja": "小さな橋",
            "en": "Small Bridge"
        },
        "desc": {
            "ja": "必要資源:\n- 丸太 x15\n- 板 x25\n必要人員: 3",
            "en": "Resources:\n- Any Log x15\n- Any Plank x25\nWorkers: 3"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 1916,
        "y": 252,
        "name": {
            "ja": "略奪者の野営地",
            "en": "Looters Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x3\n- つるはし x3\n- 斧 x3\n必要人員: 2",
            "en": "Demolish/Resources:\n- Shovel x3\n- Pickaxe x3\n- Axe x3\nWorkers: 2"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 2472,
        "y": 264,
        "name": {
            "ja": "盗賊の野営地",
            "en": "Bandit Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x3\n- つるはし x5\n- 斧 x2\n必要人員: 4",
            "en": "Demolish/Resources:\n- Shovel x3\n- Pickaxe x5\n- Axe x2\nWorkers: 4"
        }
    },
    {
        "category": "ft",
        "type": "iwasaki",
        "x": 2729,
        "y": 541,
        "name": {
            "ja": "岩崎",
            "en": "Iwasaki"
        },
        "desc": {
            "ja": "NPC村",
            "en": "NPC Village"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 3157,
        "y": 488,
        "name": {
            "ja": "暗殺者の野営地",
            "en": "Thugs Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x4\n- つるはし x3\n- 斧 x5\n必要人員: 5",
            "en": "Demolish/Resources:\n- Shovel x4\n- Pickaxe x3\n- Axe x5\nWorkers: 5"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 3019,
        "y": 810,
        "name": {
            "ja": "無法者の野営地",
            "en": "Outlaw Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x5\n- つるはし x3\n- 斧 x5\n必要人員: 6",
            "en": "Demolish/Resources:\n- Shovel x5\n- Pickaxe x3\n- Axe x5\nWorkers: 6"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 3107,
        "y": 1655,
        "name": {
            "ja": "侍の野営地",
            "en": "Samurai Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x7\n- つるはし x7\n- 斧 x7\n必要人員: 10",
            "en": "Demolish/Resources:\n- Shovel x7\n- Pickaxe x7\n- Axe x7\nWorkers: 10"
        }
    },
    {
        "category": "ft",
        "type": "temple",
        "x": 2779,
        "y": 1399,
        "name": {
            "ja": "寺",
            "en": "Temple"
        },
        "desc": {
            "ja": "NPC村",
            "en": "NPC Village"
        }
    },
    {
        "category": "ft",
        "type": "aratani",
        "x": 2443,
        "y": 1335,
        "name": {
            "ja": "荒谷",
            "en": "Aratani"
        },
        "desc": {
            "ja": "NPC村",
            "en": "NPC Village"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 2496,
        "y": 1712,
        "name": {
            "ja": "足軽の野営地",
            "en": "Ashigaru Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x6\n- つるはし x6\n- 斧 x6\n必要人員: 10",
            "en": "Demolish/Resources:\n- Shovel x6\n- Pickaxe x6\n- Axe x6\nWorkers: 10"
        }
    },
    {
        "category": "other",
        "type": "unknown",
        "x": 2691,
        "y": 1556,
        "name": {
            "ja": "大きな担ぎ屋台",
            "en": "Large Portable Trader Stand"
        },
        "desc": {
            "ja": "オブジェクトが設置されている",
            "en": "An object is placed"
        }
    },
    {
        "category": "other",
        "type": "unknown",
        "x": 2292,
        "y": 1162,
        "name": {
            "ja": "小さな担ぎ屋台",
            "en": "Small Portable Trader Stand"
        },
        "desc": {
            "ja": "オブジェクトが設置されている",
            "en": "An object is placed"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 2102,
        "y": 1768,
        "name": {
            "ja": "浪人の野営地",
            "en": "Ronin Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x6\n- つるはし x5\n- 斧 x5\n必要人員: 9",
            "en": "Demolish/Resources:\n- Shovel x6\n- Pickaxe x5\n- Axe x5\nWorkers: 9"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 1845,
        "y": 1475,
        "name": {
            "ja": "海賊の野営地",
            "en": "Pirates Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x4\n- つるはし x6\n- 斧 x6\n必要人員: 8",
            "en": "Demolish/Resources:\n- Shovel x4\n- Pickaxe x6\n- Axe x6\nWorkers: 8"
        }
    },
    {
        "category": "ft",
        "type": "segi",
        "x": 2259,
        "y": 1024,
        "name": {
            "ja": "千木",
            "en": "Segi"
        },
        "desc": {
            "ja": "NPC村",
            "en": "NPC Village"
        }
    },
    {
        "category": "enemy",
        "type": "enemycamp",
        "x": 2403,
        "y": 969,
        "name": {
            "ja": "脱走兵の野営地",
            "en": "Deserters Camp"
        },
        "desc": {
            "ja": "敵陣解体/必要資源:\n- 鋤 x5\n- つるはし x5\n- 斧 x5\n必要人員: 7",
            "en": "Demolish/Resources:\n- Shovel x5\n- Pickaxe x5\n- Axe x5\nWorkers: 7"
        }
    },
    {
        "category": "ft",
        "type": "sosogi",
        "x": 1997,
        "y": 490,
        "name": {
            "ja": "曽々木",
            "en": "Sosogi"
        },
        "desc": {
            "ja": "荒廃した村\nクエスト拠点およびプレイヤー建設候補地",
            "en": "Ruined Village\nQuest hub and potential player settlement"
        }
    },
    {
        "category": "shrine",
        "type": "jizo",
        "x": 2131,
        "y": 657,
        "name": {
            "ja": "大きな地蔵神社",
            "en": "Large Jizō Shrine"
        },
        "desc": {
            "ja": "(再建不要)\n\nお供え: 菊の花 x10",
            "en": "(No reconstruction required)\n\nOffering: Chrysanthemum x10"
        }
    },
    {
        "category": "ft",
        "type": "enjirou",
        "x": 2066,
        "y": 698,
        "name": {
            "ja": "円次郎鐘楼",
            "en": "Enjirō Bell Tower"
        },
        "desc": {
            "ja": "NPC村",
            "en": "NPC Village"
        }
    },
    {
        "category": "ft",
        "type": "enjiroupier",
        "x": 2078,
        "y": 714,
        "name": {
            "ja": "円次郎の桟橋",
            "en": "Enjirō Pier"
        },
        "desc": {
            "ja": "ファストトラベルの場所",
            "en": "Fast Travel location"
        }
    },
    {
        "category": "ft",
        "type": "onsen",
        "x": 2476,
        "y": 442,
        "name": {
            "ja": "温泉",
            "en": "Onsen"
        },
        "desc": {
            "ja": "ファストトラベルの場所",
            "en": "Fast Travel location"
        }
    }
];
