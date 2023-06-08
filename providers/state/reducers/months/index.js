import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  months: [
    {
      id: "1",
      month: "January",
    },
    {
      id: "2",
      month: "February",
    },
    {
      id: "3",
      month: "March",
    },
    {
      id: "4",
      month: "April",
    },
    {
      id: "5",
      month: "May",
    },
    {
      id: "6",
      month: "June",
    },
    {
      id: "7",
      month: "July",
    },
    {
      id: "8",
      month: "August",
    },
    {
      id: "9",
      month: "September",
    },
    {
      id: "10",
      month: "October",
    },
    {
      id: "11",
      month: "November",
    },
    {
      id: "12",
      month: "December",
    },
  ],

  balance: 0,

  monthlyEstimatedBudgets: [
    {
      id: "1",
      monthID: "1",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 100000,
    },
    {
      id: "2",
      monthID: "2",
      year: 2023,
      revenue: 20000,
      expenses: 100,
      balance: 10000,
    },
    {
      id: "3",
      monthID: "3",
      year: 2023,
      revenue: 20000,
      expenses: 7000,
      balance: 10000,
    },
    {
      id: "4",
      monthID: "4",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "5",
      monthID: "5",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "6",
      monthID: "6",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "7",
      monthID: "7",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "8",
      monthID: "8",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "9",
      monthID: "9",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "10",
      monthID: "10",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "11",
      monthID: "11",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "12",
      monthID: "12",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
  ],

  monthlyActualBudgets: [
    {
      id: "1",
      monthID: "1",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 100000,
    },
    {
      id: "2",
      monthID: "2",
      year: 2023,
      revenue: 20000,
      expenses: 100,
      balance: 10000,
    },
    {
      id: "3",
      monthID: "3",
      year: 2023,
      revenue: 20000,
      expenses: 7000,
      balance: 10000,
    },
    {
      id: "4",
      monthID: "4",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "5",
      monthID: "5",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "6",
      monthID: "6",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "7",
      monthID: "7",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "8",
      monthID: "8",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "9",
      monthID: "9",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "10",
      monthID: "10",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "11",
      monthID: "11",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
    {
      id: "12",
      monthID: "12",
      year: 2023,
      revenue: 20000,
      expenses: 1000,
      balance: 10000,
    },
  ],

  categories: [
    {
      id: "1",
      name: "Salary",
      type: "income",
    },
    {
      id: "2",
      name: "Others",
      type: "income",
    },
    {
      id: "3",
      name: "Food",
      type: "expense",
    },
    {
      id: "4",
      name: "Accomodation",
      type: "expense",
    },
  ],

  monthlyAnalysis: [
    {
      id: "1",
      monthID: "1",
      categoryID: "1",
      forseen: 10000,
      acomplished: 10000,
      gap: 0,
    },
    {
      id: "2",
      monthID: "1",
      categoryID: "2",
      forseen: 10000,
      acomplished: 10000,
      gap: 0,
    },
    {
      id: "3",
      monthID: "1",
      categoryID: "3",
      forseen: 10000,
      acomplished: 10000,
      gap: 0,
    },
  ],

  incomes: [
    {
      id: "1",
      title: "Salary",
    },
  ],

  currentMonthID: "1",
};

export const monthsSlice = createSlice({
  name: "months",
  initialState: initialState,
  reducers: {
    setCurrentMonthID: (state, action) => {
      state.currentMonthID = action.payload;
    },
  },
});

export const { setCurrentMonthID } = monthsSlice.actions;
export default monthsSlice.reducer;
