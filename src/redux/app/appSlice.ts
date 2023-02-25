import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IState } from './app.types';
import { IUser } from 'lib/userInterface';

const initialState: IState = {
  users: [],
  currentUser: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUsers, setCurrentUser } = appSlice.actions;

export default appSlice.reducer;
