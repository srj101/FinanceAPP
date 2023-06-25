import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedDate: new Date().toISOString().split("T")[0],
  movementType: null,
  movements: [],
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
