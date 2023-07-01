import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "EUR",
  exchangeRate: 1.0,
  decimalEnabled: true,
  pinCode: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload.currency;
      state.exchangeRate = action.payload.exchangeRate;
    },
    setDecimalEnabled: (state, action) => {
      state.decimalEnabled = action.payload;
    },
    setPinCode: (state, action) => {
      state.pinCode = action.payload;
    },
  },
});

export const { setCurrency, setDecimalEnabled, setPinCode } =
  settingsSlice.actions;
export default settingsSlice.reducer;
