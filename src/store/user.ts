import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    id: number;
    phone_number: string;

    password: string;
  };
  id: number;
  phone_number: string;
  password: string;
}

const initialState: UserState = {
  user: {
    id: 0,
    phone_number: "",
    password: "",
  },
  id: 0,
  phone_number: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user;
export default userSlice.reducer;
