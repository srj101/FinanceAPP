import colors from "../colors";
import { rgbToHex } from "../funtions";

export const netWorthOptions = [
  {
    id: 0,
    name: "Actif",
    icon: "arrow-up-circle",
    color: colors.red,
  },
  {
    id: 1,
    name: "Passif",
    icon: "arrow-down-circle",
    color: colors.green,
  },
];

export const initialCategories = [
  {
    id: 1,
    name: "Salaire",
    type: "budget",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "pay-circle-o1",
      name: "pay",
    },
  },
  {
    id: 2,
    name: "Imprévu",
    type: "budget",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "wallet",
      name: "wallet",
    },
  },
  {
    id: 3,
    name: "Epargnes",
    type: "budget",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "aliwangwang-o1",
      name: "aliwangwang-o1",
    },
  },
  {
    id: 4,
    name: "Logement",
    type: "budget",
    color: {
      id: 1,
      color: colors.primary,
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
      color: colors.primary,
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
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "cloudo",
      name: "cloudo",
    },
  },
  {
    id: 7,
    name: "Alimentation",
    type: "budget",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "apple-o",
      name: "apple",
    },
  },
  {
    id: 8,
    name: "Loisirs",
    type: "budget",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "smileo",
      name: "smileo",
    },
  },

  {
    id: 9,
    name: "Autres revenus",
    type: "budget",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "meh",
      name: "meh",
    },
  },

  {
    id: 10,
    name: "Liquidité",
    type: "netWorth",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "wallet",
      name: "wallet",
    },
  },
  {
    id: 11,
    name: "Epargnes",
    type: "netWorth",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "aliwangwang-o1",
      name: "aliwangwang-o1",
    },
  },
  {
    id: 12,
    name: "Immobilier",
    type: "netWorth",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "bank",
      name: "bank",
    },
  },
  {
    id: 13,
    name: "Découvert",
    type: "netWorth",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "pay-circle-o1",
      name: "pay",
    },
  },
  {
    id: 14,
    name: "Dettes",
    type: "netWorth",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "creditcard",
      name: "creditcard",
    },
  },
  {
    id: 15,
    name: "Prêt étudiant",
    type: "netWorth",
    color: {
      id: 1,
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "idcard",
      name: "idcard",
    },
  },
  {
    id: 16,
    name: "Biens de valeur",

    type: "netWorth",
    color: {
      id: 1,
      color: colors.primary,
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
      color: colors.primary,
      name: "Primary",
    },
    icon: {
      id: 1,
      icon: "piechart",
      name: "piechart",
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
  {
    id: 17,
    name: "phone",
    icon: "phone",
  },
  {
    id: 18,
    name: "paperclip",
    icon: "paperclip",
  },
  {
    id: 19,
    name: "notification",
    icon: "notification",
  },
  {
    id: 20,
    name: "inbox",
    icon: "inbox",
  },
  {
    id: 21,
    name: "lock",
    icon: "lock",
  },
  {
    id: 22,
    name: "tags",
    icon: "tags",
  },
  {
    id: 23,
    name: "cloud",
    icon: "cloud",
  },
  {
    id: 24,
    name: "hourglass",
    icon: "hourglass",
  },
  {
    id: 25,
    name: "camera",
    icon: "camera",
  },
  {
    id: 26,
    name: "windows",
    icon: "windows",
  },
  {
    id: 27,
    name: "export",
    icon: "export",
  },
  {
    id: 28,
    name: "hdd",
    icon: "hdd",
  },
  {
    id: 29,
    name: "pushpin",
    icon: "pushpin",
  },
  {
    id: 30,
    name: "heart",
    icon: "heart",
  },
  {
    id: 31,
    name: "smileo",
    icon: "smileo",
  },
  {
    id: 32,
    name: "piechart",
    icon: "piechart",
  },
  {
    id: 33,
    name: "file1",
    icon: "file1",
  },
  {
    id: 34,
    name: "calendar",
    icon: "calendar",
  },
  {
    id: 35,
    name: "folder1",
    icon: "folder1",
  },
  {
    id: 36,
    name: "dingding",
    icon: "dingding",
  },
  {
    id: 37,
    name: "key",
    icon: "key",
  },
  {
    id: 38,
    name: "flag",
    icon: "flag",
  },
  {
    id: 39,
    name: "skin",
    icon: "skin",
  },
  {
    id: 40,
    name: "calculator",
    icon: "calculator",
  },

  {
    id: 41,
    name: "car",
    icon: "car",
  },
  {
    id: 42,
    name: "carryout",
    icon: "carryout",
  },
  {
    id: 43,
    name: "man",
    icon: "man",
  },
  {
    id: 44,
    name: "isv",
    icon: "isv",
  },
  {
    id: 45,
    name: "gift",
    icon: "gift",
  },
  {
    id: 46,
    name: "idcard",
    icon: "idcard",
  },
  {
    id: 47,
    name: "medicinebox",
    icon: "medicinebox",
  },
  {
    id: 48,
    name: "rest",
    icon: "rest",
  },
  {
    id: 49,
    name: "Safety",
    icon: "Safety",
  },
  {
    id: 50,
    name: "wallet",
    icon: "wallet",
  },
  {
    id: 51,
    name: "woman",
    icon: "woman",
  },
  {
    id: 52,
    name: "Trophy",
    icon: "Trophy",
  },
  {
    id: 53,
    name: "bank",
    icon: "bank",
  },
  {
    id: 54,
    name: "bulb1",
    icon: "bulb1",
  },
  {
    id: 55,
    name: "apple1",
    icon: "apple1",
  },
  {
    id: 56,
    name: "aliwangwang",
    icon: "aliwangwang",
  },
  {
    id: 57,
    name: "sound",
    icon: "sound",
  },
  {
    id: 58,
    name: "earth",
    icon: "earth",
  },
  {
    id: 59,
    name: "sync",
    icon: "sync",
  },
  {
    id: 60,
    name: "wifi",
    icon: "wifi",
  },
  {
    id: 61,
    name: "shake",
    icon: "shake",
  },
  {
    id: 62,
    name: "API",
    icon: "API",
  },
  {
    id: 63,
    name: "contacts",
    icon: "contacts",
  },
  {
    id: 64,
    name: "dashboard",
    icon: "dashboard",
  },

  {
    id: 65,
    name: "eye",
    icon: "eye",
  },
  {
    id: 66,
    name: "qrcode",
    icon: "qrcode",
  },
  {
    id: 67,
    name: "menuunfold",
    icon: "menuunfold",
  },
  {
    id: 68,
    name: "totop",
    icon: "totop",
  },

  {
    id: 69,
    name: "filter",
    icon: "filter",
  },
  {
    id: 70,
    name: "staro",
    icon: "staro",
  },
  {
    id: 71,
    name: "pause",
    icon: "pause",
  },
  {
    id: 72,
    name: "customerservice",
    icon: "customerservice",
  },

  {
    id: 73,
    name: "close",
    icon: "close",
  },
  {
    id: 74,
    name: "check",
    icon: "check",
  },
  {
    id: 75,
    name: "infocirlce",
    icon: "infocirlce",
  },
  {
    id: 76,
    name: "pluscircle",
    icon: "pluscircle",
  },

  {
    id: 77,
    name: "minuscircle",
    icon: "minuscircle",
  },
  {
    id: 78,
    name: "left",
    icon: "left",
  },
  {
    id: 79,
    name: "right",
    icon: "right",
  },
  {
    id: 80,
    name: "up",
    icon: "up",
  },

  {
    id: 81,
    name: "down",
    icon: "down",
  },
  {
    id: 82,
    name: "doubleright",
    icon: "doubleright",
  },
  {
    id: 83,
    name: "doubleleft",
    icon: "doubleleft",
  },
  {
    id: 84,
    name: "shrink",
    icon: "shrink",
  },
  {
    id: 85,
    name: "retweet",
    icon: "retweet",
  },
  {
    id: 86,
    name: "caretup",
    icon: "caretup",
  },
  {
    id: 87,
    name: "forward",
    icon: "forward",
  },
  {
    id: 88,
    name: "banckward",
    icon: "banckward",
  },
  {
    id: 89,
    name: "stepbackward",
    icon: "stepbackward",
  },
  {
    id: 90,
    name: "stepforward",
    icon: "stepforward",
  },
  {
    id: 91,
    name: "caretleft",
    icon: "caretleft",
  },
  {
    id: 92,
    name: "upcircle",
    icon: "upcircle",
  },
  {
    id: 93,
    name: "barschart",
    icon: "barschart",
  },
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
