import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeleteLike } from "./like";
import { ac } from "react-router/dist/development/route-data-BL8ToWby";

interface KorzState {
  korz: {
    id: number;
    name: string;
    cost: number;
    img: string;
    kol: number;
    def: number;
  }[];

  kol: number;
}

const initialState: KorzState = {
  korz: [],

  kol: 0,
};

const KorzSlice = createSlice({
  name: "korz",
  initialState,
  reducers: {
    SetKorz(state, action: PayloadAction<any>) {
      const itemIndex = state.korz.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.korz[itemIndex].kol++;
        state.korz[itemIndex].cost =
          state.korz[itemIndex].def * state.korz[itemIndex].kol;
      } else {
        state.korz.push({ ...action.payload, kol: 1 });
      }
    },

    DeleteKorz(state, action: PayloadAction<any>) {
      state.korz.splice(action.payload.id, 1);
    },
    DeleteAllKorz(state, action: PayloadAction<any>) {
      const idsToDelete = action.payload;

      idsToDelete.forEach((id: number) => {
        state.korz = state.korz.filter((item) => item.id !== id);
      });
      console.log(idsToDelete);
    },
    UpdateKol(state, action: PayloadAction<any>) {
      state.korz[action.payload.id].kol++;
      state.korz[action.payload.id].cost =
        state.korz[action.payload.id].def * state.korz[action.payload.id].kol;
    },
    DeleteKol(state, action: PayloadAction<any>) {
      if (state.korz[action.payload.id].kol === 1) {
        state.korz.splice(action.payload.id, 1);
      } else {
        state.korz[action.payload.id].kol--;
        state.korz[action.payload.id].cost =
          state.korz[action.payload.id].cost -
          state.korz[action.payload.id].def;
      }
    },
  },
});
export const { SetKorz, DeleteKorz, UpdateKol, DeleteKol, DeleteAllKorz } =
  KorzSlice.actions;
export const selectKorz = (state: { korz: KorzState }) => state.korz.korz;
export default KorzSlice.reducer;
