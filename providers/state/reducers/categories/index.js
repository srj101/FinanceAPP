import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
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
      const { id, name, color, icon, type } = action.payload;

      const index = state.categories.findIndex(
        (category) => category.id === id
      );

      if (index !== -1) {
        state.categories[index].name = name;
        state.categories[index].color = color;
        state.categories[index].icon = icon;
        state.categories[index].type = type;
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
