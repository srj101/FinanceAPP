import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: { label: "Euro", value: "€" },
  decimalEnabled: false,
  currencies: [
    { label: "Euro", value: "€" },
    { label: "USD", value: "$" },
  ],
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setDecimalEnabled: (state, action) => {
      state.decimalEnabled = action.payload;
    },
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
  },
});

export const { setCurrency, setDecimalEnabled, setCurrencies } =
  settingsSlice.actions;
export default settingsSlice.reducer;
