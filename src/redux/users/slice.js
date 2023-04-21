import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateFollowers } from "./operations";

const usersInitialState = { users: [], isLoading: false, error: null };

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [updateFollowers.pending]: handlePending,
    [fetchUsers.error]: handleRejected,
    [updateFollowers.error]: handleRejected,
    [fetchUsers.fulfilled](state, action) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [updateFollowers.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users[index] = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
