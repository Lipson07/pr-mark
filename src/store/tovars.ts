import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TovarState {
  tovar: {
    id: number;
    name: string;
    cost: number;
    img: string;
    im: string[];
    about: string[];
    abouts: string[];
  }[];
  id: number;
  cost: number;
  name: string;
  img: string;
  im: string[];
  about: string[];
  abouts: string[][];
}

const initialState: TovarState = {
  tovar: [],
  id: 0,
  cost: 0,
  name: "",
  img: "",
  im: [],
  about: [],
  abouts: [],
};

const tovarSlice = createSlice({
  name: "tovar",
  initialState,
  reducers: {
    SetTovar(state, action: PayloadAction<any>) {
      state.tovar.push(action.payload);
      if (state.tovar.length > 1) state.tovar.shift();
    },
  },
});
export const { SetTovar } = tovarSlice.actions;
export const selectTovar = (state: { tovar: TovarState }) => state.tovar.tovar;
export default tovarSlice.reducer;
