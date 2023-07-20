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
  updated: false,
};

export const movementSlice = createSlice({
  name: "movement",
  initialState: initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setUpdated: (state, action) => {
      state.updated = action.payload;
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

    deleteAllMovementsHavingCategory: (state, action) => {
      const { categoryId } = action.payload;

      state.estimatedMovements = state.estimatedMovements.map((month) => {
        month.data = month.data.filter(
          (item) => item.category.id !== categoryId
        );
        return month;
      });

      state.actualMovements = state.actualMovements.map((month) => {
        month.data = month.data.filter(
          (item) => item.category.id !== categoryId
        );
        return month;
      });
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
      const {
        item: movement,
        monthIndex,
        movementType,
        movementId,
        selectedMonthIndex,
      } = action.payload;

      if (movementType === "estimatedBudgets") {
        const changedMonthIndex = selectedMonthIndex;

        if (changedMonthIndex === monthIndex) {
          // update the movement in the same month

          state.estimatedMovements[monthIndex].data = state.estimatedMovements[
            monthIndex
          ].data.map((item) => {
            if (item.id === movementId) {
              return movement;
            } else {
              return item;
            }
          });
        } else {
          // delete from the old month
          state.estimatedMovements[monthIndex].data = state.estimatedMovements[
            monthIndex
          ].data.filter((item) => item.id !== movementId);

          // add to the new month
          state.estimatedMovements[changedMonthIndex].data = [
            ...state.estimatedMovements[changedMonthIndex].data,
            movement,
          ];

          state;
        }
      }

      if (movementType === "actualBudgets") {
        const changedMonthIndex = selectedMonthIndex;

        if (changedMonthIndex === monthIndex) {
          // update the movement in the same month

          state.actualMovements[monthIndex].data = state.actualMovements[
            monthIndex
          ].data.map((item) => {
            if (item.id === movementId) {
              return movement;
            } else {
              return item;
            }
          });
        } else {
          // delete from the old month
          state.actualMovements[monthIndex].data = state.actualMovements[
            monthIndex
          ].data.filter((item) => item.id !== movementId);

          // add to the new month
          state.actualMovements[changedMonthIndex].data = [
            ...state.actualMovements[changedMonthIndex].data,
            movement,
          ];

          state;
        }
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
  setUpdated,
  deleteAllMovementsHavingCategory,
} = movementSlice.actions;
export default movementSlice.reducer;
