import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null},
  token: null,
  isLoggedIn: false,
  // isRefreshing: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      // state.isRefreshing = false
    },
    [register.pending](state, action) {
      // state.isRefreshing = true
    },
    [register.rejected](state, action) {
      state.error = action.payload
      // state.isRefreshing = false
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true;
      // state.isRefreshing = false
    },
    [logIn.pending](state, action) {
      // state.isRefreshing = true
    },
    [logIn.rejected](state, action) {
      state.error = action.payload
      // state.isRefreshing = false
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  }
})

export const authReducer = authSlice.reducer