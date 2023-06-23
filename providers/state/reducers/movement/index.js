import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedDate: new Date().toISOString().split("T")[0],
  movementType: null,
  movements: [
    {
      id: "1",
      month: "January",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "2",
      month: "February",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "3",
      month: "March",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "4",
      month: "April",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "5",
      month: "May",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "6",
      month: "June",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "7",
      month: "July",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "8",
      month: "August",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "9",
      month: "September",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "10",
      month: "October",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "11",
      month: "November",
      estimatedBudgets: [],
      actualBudgets: [],
    },
    {
      id: "12",
      month: "December",
      estimatedBudgets: [],
      actualBudgets: [],
    },
  ],
  currentMonth: 0,
};

export const movementSlice = createSlice({
  name: "movement",
  initialState: initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setMovementType: (state, action) => {
      state.movementType = action.payload;
    },

    setMovements: (state, action) => {
      state.movements = action.payload;
    },

    setCurrentMonth: (state, action) => {
      state.currentMonth = action.payload;
    },

    resetState: (state) => {
      state.selectedCategory = null;
      state.selectedDate = new Date().toISOString().split("T")[0];
      state.movementType = null;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedDate,
  setMovementType,
  resetState,
  setMovements,
  setCurrentMonth,
} = movementSlice.actions;
export default movementSlice.reducer;
