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
    deleteWorth: (state, action) => {
      const { id, selectedMonthIndex, worthType } = action.payload;

      if (worthType === "assets") {
        state.assetWorths[selectedMonthIndex].data = state.assetWorths[
          selectedMonthIndex
        ].data.filter((item) => item.id !== id);
      } else if (worthType === "liabilities") {
        state.liabilityWorths[selectedMonthIndex].data = state.liabilityWorths[
          selectedMonthIndex
        ].data.filter((item) => item.id !== id);
      }
    },
    editWorth: (state, action) => {
      const { id, selectedMonthIndex, worthType, item, prevMonthIndex } =
        action.payload;

      if (worthType === "Actif") {
        if (prevMonthIndex === selectedMonthIndex) {
          // update the current month
          state.assetWorths[prevMonthIndex].data = state.assetWorths[
            prevMonthIndex
          ].data.map((worth) => {
            if (worth.id === id) {
              return item;
            }
            return worth;
          });
        } else {
          // delete from the previous month
          state.assetWorths[prevMonthIndex].data = state.assetWorths[
            prevMonthIndex
          ].data.filter((worth) => worth.id !== id);

          // add to the current month
          state.assetWorths[selectedMonthIndex].data = [
            ...state.assetWorths[selectedMonthIndex].data,
            item,
          ];
        }
      } else if (worthType === "Passif") {
        if (prevMonthIndex === selectedMonthIndex) {
          // update the current month
          state.liabilityWorths[prevMonthIndex].data = state.liabilityWorths[
            prevMonthIndex
          ].data.map((worth) => {
            if (worth.id === id) {
              return item;
            }
            return worth;
          });
        } else {
          // delete from the previous month
          state.liabilityWorths[prevMonthIndex].data = state.liabilityWorths[
            prevMonthIndex
          ].data.filter((worth) => worth.id !== id);

          // add to the current month
          state.liabilityWorths[selectedMonthIndex].data = [
            ...state.liabilityWorths[selectedMonthIndex].data,
            item,
          ];
        }
      }
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
  deleteWorth,
  editWorth,
} = worthSlice.actions;
export default worthSlice.reducer;
