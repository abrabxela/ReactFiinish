import { createSlice } from "@reduxjs/toolkit";

const accessToken = sessionStorage.getItem("accessToken");

const AuthSlice = createSlice({
  name: "user",
  initialState: {
    email: '',
    accessToken: accessToken,
    uid: '',
  },
  reducers: {
    setUser: (state, action) =>{
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.uid = action.payload.uid;
    },
    removeUser: (state) => {
        state.email = null;
        state.accessToken = null;
        state.uid = null;
        sessionStorage.setItem("accessToken", '');
    },
    setToken: (state, action) =>{
        state.accessToken = action.payload;
        sessionStorage.setItem("accessToken", action.payload);
    }
  },
});

export const {setUser, removeUser, setToken } = AuthSlice.actions;


export default AuthSlice.reducer;
