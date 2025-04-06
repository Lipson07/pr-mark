import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";

interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

const maincountSlice = createSlice({
  name: "maincount",
  initialState,
  reducers: {
    Setcount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

export const { Setcount } = maincountSlice.actions;

export const selectCount = (state: { maincount: CountState }) =>
  state.maincount.count;
export default maincountSlice.reducer;
