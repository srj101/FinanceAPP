import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
  selectedDate: new Date().toISOString().split("T")[0],
  movementType: "estimatedBudgets",
  estimatedMovements: [
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
  actualMovements: [
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
    updateMovement: (state, action) => {
      const { item, selectedMonthIndex, movementType, repeatation } =
        action.payload;

      // if repeatation is NON we update the movement in the selected month
      // else we update the movement in all the upcoming months
      // So we append the movement to the selected month or all the upcoming months as per repeatation

      if (repeatation === "NON") {
        if (movementType === "estimatedBudgets") {
          state.estimatedMovements[selectedMonthIndex].data = [
            ...state.estimatedMovements[selectedMonthIndex].data,
            item,
          ];
        } else {
          state.actualMovements[selectedMonthIndex].data = [
            ...state.actualMovements[selectedMonthIndex].data,
            item,
          ];
        }
      } else {
        // add the movement to all the upcoming months
        if (movementType === "estimatedBudgets") {
          for (
            let i = selectedMonthIndex;
            i < state.estimatedMovements.length;
            i++
          ) {
            state.estimatedMovements[i].data = [
              ...state.estimatedMovements[i].data,
              item,
            ];
          }
        } else {
          for (
            let i = selectedMonthIndex;
            i < state.actualMovements.length;
            i++
          ) {
            state.actualMovements[i].data = [
              ...state.actualMovements[i].data,
              item,
            ];
          }
        }
      }
    },

    deleteMovement: (state, action) => {
      const { movementType, movementId, monthIndex } = action.payload;

      if (movementType === "estimatedBudgets") {
        state.estimatedMovements[monthIndex].data = state.estimatedMovements[
          monthIndex
        ].data.filter((item) => item.id !== movementId);
      }

      if (movementType === "actualBudgets") {
        state.actualMovements[monthIndex].data = state.actualMovements[
          monthIndex
        ].data.filter((item) => item.id !== movementId);
      }
    },

    editMovement: (state, action) => {
      const { movementType, movementId, monthIndex, movement } = action.payload;

      if (movementType === "estimatedBudgets") {
        state.estimatedMovements[monthIndex].data = state.estimatedMovements[
          monthIndex
        ].data.map((item) => {
          if (item.id === movementId) {
            return movement;
          }

          return item;
        });
      }

      if (movementType === "actualBudgets") {
        state.actualMovements[monthIndex].data = state.actualMovements[
          monthIndex
        ].data.map((item) => {
          if (item.id === movementId) {
            return movement;
          }

          return item;
        });
      }
    },

    setEstimaedMovements: (state, action) => {
      state.estimatedMovements = action.payload;
    },

    setActualMovements: (state, action) => {
      state.actualMovements = action.payload;
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
  updateMovement,
  setEstimaedMovements,
  setActualMovements,
  deleteMovement,
  editMovement,
} = movementSlice.actions;
export default movementSlice.reducer;
