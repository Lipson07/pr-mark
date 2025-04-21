import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Likestate {
  likecount: boolean;
  id: {
    ids: number;
    name: string;
    cost: number;
    img: string;
    im: string[];
    about: string[];
    abouts: string[];
    likecount: boolean;
  };
  Likeobj: {
    id: {
      ids: number;
      name: string;
      cost: number;
      img: string;
      im: string[];
      about: string[];
      abouts: string[];
      likecount: boolean;
    };
  }[];
}
const initialState: Likestate = {
  likecount: false,
  id: {
    ids: 0,
    cost: 0,
    name: "",
    img: "",
    im: [],
    about: [],
    abouts: [],
    likecount: false,
  },
  Likeobj: [],
};
const LikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    SetLike(
      state,
      action: PayloadAction<{
        id: {
          ids: number;
          name: string;
          cost: number;
          img: string;
          im: string[];
          about: string[];
          abouts: string[];
          likecount: boolean;
        };
      }>
    ) {
      const index: number = action.payload.id.ids;
      const existingTovarIndex = state.Likeobj.findIndex(
        (item) => item.id.ids === index
      );
      if (existingTovarIndex == -1) {
        state.Likeobj.push(action.payload);
      }
      state.id.likecount = true;
    },
    Setid(state, action: PayloadAction<any>) {
      state.id = action.payload;
    },
    DeleteLike(state, action: PayloadAction<{ ids: number }>) {
      state.Likeobj = state.Likeobj.filter(
        (item) => item.id.ids !== action.payload.ids
      );
    },
  },
});
export const { SetLike, Setid, DeleteLike } = LikeSlice.actions;

export const selectLike = (state: { like: Likestate }) => state.like.Likeobj;
export default LikeSlice.reducer;
