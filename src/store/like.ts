import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Likestate {
  likecount: boolean;
  id: { index: number; cost: number; likecount: boolean };
  Likeobj: { id: { index: number; cost: number; likecount: boolean } }[];
}
const initialState: Likestate = {
  likecount: false,
  id: { index: 0, cost: 0, likecount: false },
  Likeobj: [],
};
const LikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    SetLike(
      state,
      action: PayloadAction<{
        id: { index: number; cost: number; likecount: boolean };
      }>
    ) {
      const index: number = action.payload.id.index;
      const existingTovarIndex = state.Likeobj.findIndex(
        (item) => item.id.index === index
      );
      if (existingTovarIndex == -1) {
        state.Likeobj.push(action.payload);
      }
      state.id.likecount = true;
    },
    Setid(
      state,
      action: PayloadAction<{ index: number; cost: number; likecount: boolean }>
    ) {
      state.id = action.payload;
    },
    DeleteLike(state, action: PayloadAction<{ index: number }>) {
      state.Likeobj = state.Likeobj.filter(
        (item) => item.id.index !== action.payload.index
      );
    },
  },
});
export const { SetLike, Setid, DeleteLike } = LikeSlice.actions;

export const selectLike = (state: { like: Likestate }) => state.like.Likeobj;
export default LikeSlice.reducer;
