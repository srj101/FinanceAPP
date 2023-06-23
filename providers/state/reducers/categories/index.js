import { createSlice } from "@reduxjs/toolkit";
import colors from "../../../../utils/colors";

const initialState = {
  categories: [
    {
      id: 1,
      name: "Book",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "book",
        name: "book",
      },
    },
    {
      id: 2,
      name: "Share",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "sharealt",
        name: "sharealt",
      },
    },
    {
      id: 3,
      name: "Investment",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "team",
        name: "team",
      },
    },
    {
      id: 4,
      name: "Shopping",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "shoppingcart",
        name: "shoppingcart",
      },
    },
    {
      id: 5,
      name: "Video",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "videocamera",
        name: "videocamera",
      },
    },
    {
      id: 6,
      name: "Risk",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "meho",
        name: "meho",
      },
    },
    {
      id: 7,
      name: "Star",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "star",
        name: "star",
      },
    },
    {
      id: 8,
      name: "Finance",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "laptop",
        name: "laptop",
      },
    },
    {
      id: 9,
      name: "Home",
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
      id: 10,
      name: "Analysis",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "linechart",
        name: "linechart",
      },
    },
    {
      id: 11,
      name: "Email",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "mail",
        name: "mail",
      },
    },
    {
      id: 12,
      name: "Exchange",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "swap",
        name: "swap",
      },
    },
    {
      id: 13,
      name: "Loss",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "frown",
        name: "frown",
      },
    },
    {
      id: 14,
      name: "Time",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "clockcircleo",
        name: "clockcircleo",
      },
    },
    {
      id: 15,
      name: "Menu",
      color: {
        id: 1,
        color: colors.primary,
        name: "Primary",
      },
      icon: {
        id: 1,
        icon: "bars",
        name: "bars",
      },
    },
  ],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },

    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },

    editCategory: (state, action) => {
      const { id, name, color, icon } = action.payload;

      const index = state.categories.findIndex(
        (category) => category.id === id
      );

      if (index !== -1) {
        state.categories[index].name = name;
        state.categories[index].color = color;
        state.categories[index].icon = icon;
      }
    },

    resetState: (state) => {
      state.categories = initialState.categories;
    },
  },
});

export const {
  addCategory,
  resetState,
  setCategories,
  deleteCategory,
  editCategory,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
