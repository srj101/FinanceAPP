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
      name: "euro",
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
      name: "money",
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
      name: "wpbeginner",
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
      name: "home",
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
      name: "car",
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
      name: "cloud",
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
      name: "apple",
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
      name: "smileo",
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
      name: "handshake",
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
      name: "money",
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
      name: "wpbeginner",
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
      name: "home",
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
      name: "database",
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
      name: "credit-card",
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
      name: "graduation",
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
      name: "gift",
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
      name: "suitcase",
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
];

export const icons = [
  { id: 72, icon: "bank", name: "bank" },
  { id: 94, icon: "building", name: "building" },
  { id: 6, icon: "envelope-o", name: "envelope-o" },
  { id: 204, icon: "calculator", name: "calculator" },
  { id: 0, icon: "glass", name: "glass" },
  { id: 102, icon: "cube", name: "cube" },
  { id: 52, icon: "bug", name: "bug" },

  { id: 118, icon: "taxi", name: "taxi" },
  { id: 10, icon: "star", name: "star" },
  { id: 16, icon: "film", name: "film" },
  { id: 128, icon: "database", name: "database" },
  { id: 144, icon: "life-saver", name: "life-saver" },
  { id: 158, icon: "empire", name: "empire" },
  { id: 36, icon: "trello", name: "trello" },

  { id: 164, icon: "yc-square", name: "yc-square" },
  { id: 166, icon: "qq", name: "qq" },
  { id: 182, icon: "sliders", name: "sliders" },
  { id: 192, icon: "binoculars", name: "binoculars" },
  { id: 194, icon: "plug", name: "plug" },
  { id: 196, icon: "slideshare", name: "slideshare" },
  { id: 206, icon: "paypal", name: "paypal" },
  { id: 208, icon: "cc-visa", name: "cc-visa" },
  { id: 210, icon: "cc-amex", name: "cc-amex" },
  { id: 218, icon: "trash", name: "trash" },
  { id: 226, icon: "area-chart", name: "area-chart" },
  { id: 228, icon: "pie-chart", name: "pie-chart" },
  { id: 230, icon: "line-chart", name: "line-chart" },
  { id: 232, icon: "lastfm", name: "lastfm" },
  { id: 238, icon: "bicycle", name: "bicycle" },
  { id: 240, icon: "bus", name: "bus" },
  { id: 246, icon: "cc", name: "cc" },
  { id: 252, icon: "ils", name: "ils" },
  { id: 256, icon: "buysellads", name: "buysellads" },
  { id: 258, icon: "dashcube", name: "dashcube" },
  { id: 262, icon: "leanpub", name: "leanpub" },
  { id: 266, icon: "skyatlas", name: "skyatlas" },
  { id: 272, icon: "ship", name: "ship" },
  { id: 274, icon: "motorcycle", name: "motorcycle" },
  { id: 276, icon: "heartbeat", name: "heartbeat" },
  { id: 296, icon: "money", name: "money" },
  { id: 126, icon: "soundcloud", name: "soundcloud" },
  { id: 268, icon: "cart-plus", name: "cart-plus" },
  { id: 270, icon: "diamond", name: "diamond" },
  { id: 182, icon: "sliders", name: "sliders" },
  { id: 184, icon: "share-alt", name: "share-alt" },

  { id: 220, icon: "copyright", name: "copyright" },
  { id: 216, icon: "bell-slash", name: "bell-slash" },
  { id: 218, icon: "trash", name: "trash" },
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
