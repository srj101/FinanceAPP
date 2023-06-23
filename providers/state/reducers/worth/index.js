import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedDate: new Date().toISOString().split("T")[0],
  worths: [
    {
      id: "1",
      month: "January",
      assets: [],
      liabilities: [],
    },
    {
      id: "2",
      month: "February",
      assets: [],
      liabilities: [],
    },
    {
      id: "3",
      month: "March",
      assets: [],
      liabilities: [],
    },
    {
      id: "4",
      month: "April",
      assets: [],
      liabilities: [],
    },
    {
      id: "5",
      month: "May",
      assets: [],
      liabilities: [],
    },
    {
      id: "6",
      month: "June",
      assets: [],
      liabilities: [],
    },
    {
      id: "7",
      month: "July",
      assets: [],
      liabilities: [],
    },
    {
      id: "8",
      month: "August",
      assets: [],
      liabilities: [],
    },
    {
      id: "9",
      month: "September",
      assets: [],
      liabilities: [],
    },
    {
      id: "10",
      month: "October",
      assets: [],
      liabilities: [],
    },
    {
      id: "11",
      month: "November",
      assets: [],
      liabilities: [],
    },
    {
      id: "12",
      month: "December",
      assets: [],
      liabilities: [],
    },
  ],
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
