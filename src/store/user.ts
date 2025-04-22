import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    id: number;
    name: string;
    phone_number: string;
    password: string;
  };
}

const initialState: UserState = {
  user: {
    id: 0,
    name: "",
    phone_number: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<any>) => {
      state.user = action.payload.user;
    },
    updateUser: (state: UserState, action: PayloadAction<any>) => {
      state.user.name = action.payload.name;
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user;
export default userSlice.reducer;
