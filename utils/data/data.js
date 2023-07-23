import colors from "../colors";
import { rgbToHex } from "../funtions";

export const netWorthOptions = [
  {
    id: 0,
    name: "Actif",
    icon: "arrow-up-circle",
    color: colors.green,
  },
  {
    id: 1,
    name: "Passif",
    icon: "arrow-down-circle",
    color: colors.red,
  },
];

export const initialCategories = [
  {
    id: 1,
    name: "Salaire",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(255, 59, 48),
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "euro",
      name: "FontAwesome",
    },
  },
  {
    id: 2,
    name: "Imprévu",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(0, 122, 255), // which is #007AFF
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "money",
      name: "FontAwesome",
    },
  },
  {
    id: 3,
    name: "Epargnes",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(52, 199, 89), // which is #34C759
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "wpbeginner",
      name: "FontAwesome",
    },
  },
  {
    id: 4,
    name: "Logement",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(255, 204, 0), // which is #FFCC00
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "home",
      name: "FontAwesome",
    },
  },
  {
    id: 5,
    name: "Transport",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(175, 82, 222), // which is #AF52DE
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "car",
      name: "FontAwesome",
    },
  },
  {
    id: 6,
    name: "Internet",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(255, 149, 0), // which is #FF9500
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "cloud",
      name: "FontAwesome",
    },
  },
  {
    id: 7,
    name: "Alimentation",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(255, 59, 48), // which is #FF3B30
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "apple",
      name: "FontAwesome",
    },
  },
  {
    id: 8,
    name: "Loisirs",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(0, 122, 255), // which is #007AFF
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "smile-o",
      name: "FontAwesome",
    },
  },

  {
    id: 9,
    name: "Autres revenus",
    type: "budget",
    color: {
      id: 1,
      color: rgbToHex(52, 199, 89), // which is #34C759
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "handshake-o",
      name: "FontAwesome",
    },
  },

  {
    id: 10,
    name: "Liquidité",
    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(255, 59, 48), // which is #FF3B30
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "money",
      name: "FontAwesome",
    },
  },
  {
    id: 11,
    name: "Epargnes",
    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(0, 122, 255), // which is #007AFF
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "wpbeginner",
      name: "FontAwesome",
    },
  },
  {
    id: 12,
    name: "Immobilier",
    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(52, 199, 89), // which is #34C759
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "home",
      name: "FontAwesome",
    },
  },
  {
    id: 13,
    name: "Découvert",
    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(255, 204, 0), // which is #FFCC00
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "database",
      name: "FontAwesome",
    },
  },
  {
    id: 14,
    name: "Dettes",
    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(175, 82, 222), // which is #AF52DE
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "credit-card",
      name: "FontAwesome",
    },
  },
  {
    id: 15,
    name: "Prêt étudiant",
    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(255, 149, 0), // which is #FF9500
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "graduation-cap",
      name: "FontAwesome",
    },
  },
  {
    id: 16,
    name: "Biens de valeur",

    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(255, 59, 48), // which is #FF3B30
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "gift",
      name: "FontAwesome",
    },
  },

  {
    id: 17,
    name: "Actions",
    type: "netWorth",
    color: {
      id: 1,
      color: rgbToHex(0, 122, 255), // which is #007AFF
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "suitcase",
      name: "FontAwesome",
    },
  },
];

export const colorOptions = [
  {
    id: 1,
    name: "red",
    color: rgbToHex(255, 59, 48), // which is #FF3B30
  },
  {
    id: 2,
    name: "blue",
    color: rgbToHex(0, 122, 255), // which is #007AFF
  },
  {
    id: 3,
    name: "green",
    color: rgbToHex(52, 199, 89), // which is #34C759
  },
  {
    id: 4,
    name: "yellow",
    color: rgbToHex(255, 204, 0), // which is #FFCC00
  },
  {
    id: 5,
    name: "purple",
    color: rgbToHex(175, 82, 222), // which is #AF52DE
  },
  {
    id: 6,
    name: "orange",
    color: rgbToHex(255, 149, 0), // which is #FF9500
  },
  {
    id: 7,
    name: "pink",
    color: rgbToHex(255, 45, 85), // which is #FF2D55
  },
  {
    id: 8,
    name: "teal",
    color: rgbToHex(90, 200, 250), // which is #5AC8FA
  },
  {
    id: 9,
    name: "indigo",
    color: rgbToHex(88, 86, 214), // which is #5856D6
  },
  {
    id: 10,
    name: "brown",
    color: rgbToHex(162, 132, 94), // which is #A2845E
  },
  {
    id: 11,
    name: "gray",
    color: rgbToHex(142, 142, 147), // which is #8E8E93
  },
  {
    id: 12,
    name: "cyan",
    color: rgbToHex(64, 156, 255), // which is #409CFF
  },
  {
    id: 13,
    name: "magenta",
    color: rgbToHex(255, 45, 85), // which is #FF2D55
  },
  {
    id: 14,
    name: "lime",
    color: rgbToHex(48, 240, 88), // which is #30D158
  },
  {
    id: 15,
    name: "dracula",
    color: "#2d3436",
  },
  {
    id: 16,
    name: "pico-8-pink",
    color: "#fd79a8",
  },
  {
    id: 17,
    name: "american-river",
    color: "#636e72",
  },
  {
    id: 18,
    name: "bright-yarrow",
    color: "#fdcb6e",
  },
  {
    id: 19,
    name: "orange-ville",
    color: "#d63031",
  },
  {
    id: 20,
    name: "chicago",
    color: "#ff9f1a",
  },
  {
    id: 21,
    name: "mint-leaf",
    color: "#00b894",
  },
  {
    id: 22,
    name: "faded-poster",
    color: "#81ecec",
  },
  {
    id: 23,
    name: "green-darner-tail",
    color: "#74b9ff",
  },
  {
    id: 24,
    name: "shy-moment",
    color: "#a29bfe",
  },
  {
    id: 25,
    name: "city-lights",
    color: "#dfe6e9",
  },
  {
    id: 26,
    name: "mint-cream",
    color: "#00cec9",
  },
  {
    id: 27,
    name: "prunus-avium",
    color: "#e84393",
  },
  {
    id: 28,
    name: "dracula-orchid",
    color: "#2d3436",
  },
  {
    id: 29,
    name: "frost",
    color: "#dfe6e9",
  },
  {
    id: 30,
    name: "pink-glamour",
    color: "#ffcccc",
  },
];

export const icons = [
  { id: 2151, icon: "money", name: "FontAwesome" },
  { id: 1000, icon: "bank", name: "FontAwesome" },
  { id: 2000, icon: "building", name: "FontAwesome" },
  { id: 3000, icon: "envelope-o", name: "FontAwesome" },
  { id: 4000, icon: "calculator", name: "FontAwesome" },
  { id: 5000, icon: "glass", name: "FontAwesome" },
  { id: 888, icon: "cube", name: "FontAwesome" },
  { id: 889, icon: "bug", name: "FontAwesome" },

  { id: 890, icon: "taxi", name: "FontAwesome" },
  { id: 891, icon: "star", name: "FontAwesome" },
  { id: 892, icon: "film", name: "FontAwesome" },
  { id: 893, icon: "database", name: "FontAwesome" },
  { id: 894, icon: "life-saver", name: "FontAwesome" },
  { id: 895, icon: "empire", name: "FontAwesome" },
  { id: 896, icon: "trello", name: "FontAwesome" },

  { id: 900, icon: "yc-square", name: "FontAwesome" },
  { id: 800, icon: "qq", name: "FontAwesome" },
  { id: 700, icon: "sliders", name: "FontAwesome" },
  { id: 600, icon: "binoculars", name: "FontAwesome" },
  { id: 500, icon: "plug", name: "FontAwesome" },
  { id: 400, icon: "slideshare", name: "FontAwesome" },
  { id: 206, icon: "paypal", name: "FontAwesome" },
  { id: 208, icon: "cc-visa", name: "FontAwesome" },
  { id: 210, icon: "cc-amex", name: "FontAwesome" },
  { id: 218, icon: "trash", name: "FontAwesome" },
  { id: 226, icon: "area-chart", name: "FontAwesome" },
  { id: 228, icon: "pie-chart", name: "FontAwesome" },
  { id: 230, icon: "line-chart", name: "FontAwesome" },
  { id: 232, icon: "lastfm", name: "FontAwesome" },
  { id: 238, icon: "bicycle", name: "FontAwesome" },
  { id: 240, icon: "bus", name: "FontAwesome" },
  { id: 246, icon: "cc", name: "FontAwesome" },
  { id: 252, icon: "ils", name: "FontAwesome" },
  { id: 256, icon: "buysellads", name: "FontAwesome" },
  { id: 258, icon: "dashcube", name: "FontAwesome" },
  { id: 262, icon: "leanpub", name: "FontAwesome" },
  { id: 266, icon: "skyatlas", name: "FontAwesome" },
  { id: 272, icon: "ship", name: "FontAwesome" },
  { id: 274, icon: "motorcycle", name: "FontAwesome" },
  { id: 276, icon: "heartbeat", name: "FontAwesome" },
  { id: 126, icon: "soundcloud", name: "FontAwesome" },
  { id: 268, icon: "cart-plus", name: "FontAwesome" },
  { id: 270, icon: "diamond", name: "FontAwesome" },
  { id: 182, icon: "sliders", name: "FontAwesome" },
  { id: 184, icon: "share-alt", name: "FontAwesome" },

  { id: 220, icon: "copyright", name: "FontAwesome" },
  { id: 216, icon: "bell-slash", name: "FontAwesome" },
  { id: 218, icon: "trash", name: "FontAwesome" },

  { id: 20, icon: "cash-register", name: "MaterialCommunityIcons" },
  { id: 21, icon: "chart-arc", name: "MaterialCommunityIcons" },
  { id: 22, icon: "chart-areaspline", name: "MaterialCommunityIcons" },
  { id: 23, icon: "chart-bar", name: "MaterialCommunityIcons" },
  { id: 24, icon: "chart-bubble", name: "MaterialCommunityIcons" },
  { id: 25, icon: "chart-gantt", name: "MaterialCommunityIcons" },
  { id: 26, icon: "chart-histogram", name: "MaterialCommunityIcons" },
  { id: 27, icon: "chart-line", name: "MaterialCommunityIcons" },
  { id: 28, icon: "chart-line-stacked", name: "MaterialCommunityIcons" },
  { id: 29, icon: "chart-line-variant", name: "MaterialCommunityIcons" },
  { id: 30, icon: "chart-multiline", name: "MaterialCommunityIcons" },
  { id: 31, icon: "chart-pie", name: "MaterialCommunityIcons" },
  { id: 33, icon: "chart-timeline", name: "MaterialCommunityIcons" },
  { id: 53, icon: "file-document-edit", name: "MaterialCommunityIcons" },
  { id: 58, icon: "folder-upload-outline", name: "MaterialCommunityIcons" },
  { id: 59, icon: "bank-minus", name: "MaterialCommunityIcons" },
  { id: 60, icon: "bank-plus", name: "MaterialCommunityIcons" },
  { id: 61, icon: "bank-remove", name: "MaterialCommunityIcons" },
  { id: 62, icon: "bank-transfer", name: "MaterialCommunityIcons" },
  { id: 63, icon: "bank-transfer-in", name: "MaterialCommunityIcons" },
  { id: 64, icon: "bank-transfer-out", name: "MaterialCommunityIcons" },
  { id: 65, icon: "barcode-scan", name: "MaterialCommunityIcons" },
  { id: 66, icon: "cash", name: "MaterialCommunityIcons" },
  { id: 67, icon: "cash-100", name: "MaterialCommunityIcons" },
  { id: 68, icon: "cash-marker", name: "MaterialCommunityIcons" },
  { id: 69, icon: "cash-multiple", name: "MaterialCommunityIcons" },
  { id: 70, icon: "cash-refund", name: "MaterialCommunityIcons" },
  { id: 71, icon: "cash-register", name: "MaterialCommunityIcons" },

  { id: 73, icon: "chart-bell-curve", name: "MaterialCommunityIcons" },
  { id: 74, icon: "chart-bubble", name: "MaterialCommunityIcons" },
  { id: 75, icon: "chart-box", name: "MaterialCommunityIcons" },
  { id: 76, icon: "chart-box-outline", name: "MaterialCommunityIcons" },
  { id: 77, icon: "chart-donut", name: "MaterialCommunityIcons" },
  { id: 78, icon: "chart-donut-variant", name: "MaterialCommunityIcons" },
  { id: 79, icon: "chart-line-stacked", name: "MaterialCommunityIcons" },
  { id: 80, icon: "chart-line-variant", name: "MaterialCommunityIcons" },
  { id: 81, icon: "chart-multiline", name: "MaterialCommunityIcons" },
  { id: 82, icon: "chart-pie", name: "MaterialCommunityIcons" },
  { id: 83, icon: "chart-sankey", name: "MaterialCommunityIcons" },
  { id: 84, icon: "chart-sankey-variant", name: "MaterialCommunityIcons" },
  { id: 85, icon: "chart-scatter-plot", name: "MaterialCommunityIcons" },
  { id: 86, icon: "chart-scatter-plot-hexbin", name: "MaterialCommunityIcons" },
  { id: 87, icon: "chart-timeline", name: "MaterialCommunityIcons" },
  { id: 88, icon: "chart-timeline-variant", name: "MaterialCommunityIcons" },
  { id: 89, icon: "chart-tree", name: "MaterialCommunityIcons" },
  { id: 90, icon: "credit-card", name: "MaterialCommunityIcons" },
  { id: 100, icon: "credit-card-scan", name: "MaterialCommunityIcons" },
  { id: 101, icon: "credit-card-settings", name: "MaterialCommunityIcons" },
  { id: 102, icon: "currency-usd", name: "MaterialCommunityIcons" },
  { id: 128, icon: "gift", name: "MaterialCommunityIcons" },

  { id: 2001, icon: "music", name: "FontAwesome" },
  { id: 2002, icon: "search", name: "FontAwesome" },
  { id: 2004, icon: "heart", name: "FontAwesome" },
  { id: 2006, icon: "star-o", name: "FontAwesome" },
  { id: 2007, icon: "user", name: "FontAwesome" },
  { id: 2009, icon: "th-large", name: "FontAwesome" },
  { id: 2010, icon: "adjust", name: "FontAwesome" },
  { id: 2011, icon: "tint", name: "FontAwesome" },
  { id: 2012, icon: "edit", name: "FontAwesome" },
  { id: 2065, icon: "retweet", name: "FontAwesome" },
  { id: 2066, icon: "shopping-cart", name: "FontAwesome" },
  { id: 2067, icon: "folder", name: "FontAwesome" },
  { id: 2069, icon: "arrows-v", name: "FontAwesome" },
  { id: 2070, icon: "arrows-h", name: "FontAwesome" },
  { id: 2072, icon: "bar-chart", name: "FontAwesome" },
  { id: 2073, icon: "twitter-square", name: "FontAwesome" },
  { id: 2074, icon: "facebook-square", name: "FontAwesome" },
  { id: 2075, icon: "camera-retro", name: "FontAwesome" },
  { id: 2076, icon: "key", name: "FontAwesome" },
  { id: 2078, icon: "cogs", name: "FontAwesome" },
  { id: 2079, icon: "comments", name: "FontAwesome" },
  { id: 2080, icon: "thumbs-o-up", name: "FontAwesome" },
  { id: 2081, icon: "thumbs-o-down", name: "FontAwesome" },
  { id: 2082, icon: "star-half", name: "FontAwesome" },
  { id: 2083, icon: "heart-o", name: "FontAwesome" },
  { id: 2084, icon: "sign-out", name: "FontAwesome" },
  { id: 2085, icon: "linkedin-square", name: "FontAwesome" },
  { id: 2086, icon: "thumb-tack", name: "FontAwesome" },
  { id: 2087, icon: "external-link", name: "FontAwesome" },
  { id: 2088, icon: "sign-in", name: "FontAwesome" },

  { id: 2129, icon: "cut", name: "FontAwesome" },
  { id: 2130, icon: "scissors", name: "FontAwesome" },
  { id: 2131, icon: "copy", name: "FontAwesome" },
  { id: 2132, icon: "files-o", name: "FontAwesome" },
  { id: 2133, icon: "paperclip", name: "FontAwesome" },
  { id: 2134, icon: "save", name: "FontAwesome" },
  { id: 2135, icon: "floppy-o", name: "FontAwesome" },
  { id: 2137, icon: "navicon", name: "FontAwesome" },
  { id: 2138, icon: "reorder", name: "FontAwesome" },

  { id: 2142, icon: "strikethrough", name: "FontAwesome" },
  { id: 2143, icon: "underline", name: "FontAwesome" },
  { id: 2144, icon: "table", name: "FontAwesome" },
  { id: 2145, icon: "magic", name: "FontAwesome" },
  { id: 2146, icon: "truck", name: "FontAwesome" },
  { id: 2147, icon: "pinterest", name: "FontAwesome" },
  { id: 2149, icon: "google-plus-square", name: "FontAwesome" },
];

export const currencies = [
  { label: "USD", value: "$" },
  { label: "Euro", value: "€" },
];

export const initialEstimatedBudgets = [
  {
    id: "1",
    month: "January",
    data: [],
  },
  {
    id: "2",
    month: "February",
    data: [],
  },
  {
    id: "3",
    month: "March",
    data: [],
  },
  {
    id: "4",
    month: "April",
    data: [],
  },
  {
    id: "5",
    month: "May",
    data: [],
  },
  {
    id: "6",
    month: "June",
    data: [],
  },
  {
    id: "7",
    month: "July",
    data: [],
  },
  {
    id: "8",
    month: "August",
    data: [],
  },
  {
    id: "9",
    month: "September",
    data: [],
  },
  {
    id: "10",
    month: "October",
    data: [],
  },
  {
    id: "11",
    month: "November",
    data: [],
  },
  {
    id: "12",
    month: "December",
    data: [],
  },
];

export const initialActualMovements = [
  {
    id: "1",
    month: "January",
    data: [],
  },
  {
    id: "2",
    month: "February",
    data: [],
  },
  {
    id: "3",
    month: "March",
    data: [],
  },
  {
    id: "4",
    month: "April",
    data: [],
  },
  {
    id: "5",
    month: "May",
    data: [],
  },
  {
    id: "6",
    month: "June",
    data: [],
  },
  {
    id: "7",
    month: "July",
    data: [],
  },
  {
    id: "8",
    month: "August",
    data: [],
  },
  {
    id: "9",
    month: "September",
    data: [],
  },
  {
    id: "10",
    month: "October",
    data: [],
  },
  {
    id: "11",
    month: "November",
    data: [],
  },
  {
    id: "12",
    month: "December",
    data: [],
  },
];

export const initalOptions = [
  {
    id: 0,
    name: "Dépense",
    icon: "arrow-down-circle",
    color: colors.red,
  },
  {
    id: 1,
    name: "Revenu",
    icon: "arrow-up-circle",
    color: colors.green,
  },
];

export const initalLiabilitiesWorth = [
  {
    id: "1",
    month: "January",
    data: [],
  },
  {
    id: "2",
    month: "February",
    data: [],
  },
  {
    id: "3",
    month: "March",
    data: [],
  },
  {
    id: "4",
    month: "April",
    data: [],
  },
  {
    id: "5",
    month: "May",
    data: [],
  },
  {
    id: "6",
    month: "June",
    data: [],
  },
  {
    id: "7",
    month: "July",
    data: [],
  },
  {
    id: "8",
    month: "August",
    data: [],
  },
  {
    id: "9",
    month: "September",
    data: [],
  },
  {
    id: "10",
    month: "October",
    data: [],
  },
  {
    id: "11",
    month: "November",
    data: [],
  },
  {
    id: "12",
    month: "December",
    data: [],
  },
];

export const initialAssetWorths = [
  {
    id: "1",
    month: "January",
    data: [],
  },
  {
    id: "2",
    month: "February",
    data: [],
  },
  {
    id: "3",
    month: "March",
    data: [],
  },
  {
    id: "4",
    month: "April",
    data: [],
  },
  {
    id: "5",
    month: "May",
    data: [],
  },
  {
    id: "6",
    month: "June",
    data: [],
  },
  {
    id: "7",
    month: "July",
    data: [],
  },
  {
    id: "8",
    month: "August",
    data: [],
  },
  {
    id: "9",
    month: "September",
    data: [],
  },
  {
    id: "10",
    month: "October",
    data: [],
  },
  {
    id: "11",
    month: "November",
    data: [],
  },
  {
    id: "12",
    month: "December",
    data: [],
  },
];

// Path: utils/data/data.js
