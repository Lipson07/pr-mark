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
  kols: number;
  costs: number;
  kol: number;
  skidka: number;

  procent: number;
}

const initialState: KorzState = {
  korz: [],
  kols: 0,
  costs: 0,
  kol: 0,
  skidka: 0,
  procent: 0,
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
    SetCosts(state) {
      const sum = state.korz.reduce((acc, item) => acc + item.cost, 0);
      state.costs = sum;
    },
    SetKols(state) {
      const sum = state.korz.reduce((acc, item) => acc + item.kol, 0);
      state.kols = sum;
    },
    SetPromo(state, action: PayloadAction<any>) {
      const a = action.payload;
      console.log(a);

      switch (a.toLowerCase()) {
        case "dogscasino":
          state.procent = 50;
          state.skidka =
            state.costs -
            Number((state.costs * (state.procent / 100)).toFixed());
          break;
        case "super":
          state.procent = 30;
          state.skidka =
            state.costs -
            Number((state.costs * (state.procent / 100)).toFixed());
          break;
        default:
          state.procent = 0;
          state.skidka = 0;
      }
    },
  },
});
export const {
  SetKorz,
  DeleteKorz,
  UpdateKol,
  DeleteKol,
  DeleteAllKorz,
  SetCosts,
  SetKols,
  SetPromo,
} = KorzSlice.actions;
export const selectKorz = (state: { korz: KorzState }) => state.korz.korz;
export const selectKols = (state: { korz: KorzState }) => state.korz.kols;
export const selectCosts = (state: { korz: KorzState }) => state.korz.costs;

export const selectSkidka = (state: { korz: KorzState }) => state.korz.skidka;
export const selectProcent = (state: { korz: KorzState }) => state.korz.procent;
export default KorzSlice.reducer;
