import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedDate: new Date().toISOString().split("T")[0],
  assetWorths: [
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
  ],
  liabilityWorths: [
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
    setAssetWorths: (state, action) => {
      state.assetWorths = action.payload;
    },
    setLiabilityWorths: (state, action) => {
      state.liabilityWorths = action.payload;
    },
    updateWorths: (state, action) => {
      const { item, selectedMonthIndex, worthType } = action.payload;

      if (worthType === "Actif") {
        state.assetWorths[selectedMonthIndex].data = [
          ...state.assetWorths[selectedMonthIndex].data,
          item,
        ];
      } else if (worthType === "Passif") {
        state.liabilityWorths[selectedMonthIndex].data = [
          ...state.liabilityWorths[selectedMonthIndex].data,
          item,
        ];
      }
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
  setAssetWorths,
  setLiabilityWorths,
  updateWorths,
} = worthSlice.actions;
export default worthSlice.reducer;
