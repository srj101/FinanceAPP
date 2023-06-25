import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedDate: new Date().toISOString().split("T")[0],
  worths: [],
  currentMonth: 0,
  worthType: null,
};

export const worthSlice = createSlice({
  name: "worth",
  initialState: initialState,
  reducers: {
    setInitialWorths: (state, action) => {
      state.worths = action.payload;
    },
    setCurrentMonthIdx: (state, action) => {
      state.currentMonth = action.payload;
    },
    setWorths: (state, action) => {
      state.worths = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setWorthType: (state, action) => {
      state.worthType = action.payload;
    },
    resetState: (state) => {
      state.selectedCategory = null;
      state.selectedDate = new Date().toISOString().split("T")[0];
      state.worthType = null;
    },
  },
});

export const {
  setInitialWorths,
  setCurrentMonthIdx,
  setCategory,
  setDate,
  setWorthType,
  resetState,
  setWorths,
} = worthSlice.actions;
export default worthSlice.reducer;
