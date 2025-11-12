import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TInitialState = {
  count: number;
};
const initialState: TInitialState = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
    },
    decrease: (state) => {
      state.count = state.count - 1;
    },
    increaseByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});
export const { increase, decrease, increaseByValue } = counterSlice.actions;
export default counterSlice.reducer;
