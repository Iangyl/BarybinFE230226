import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IState } from './app.types';
import { IUser } from 'lib/userInterface';

const initialState: IState = {
  users: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = appSlice.actions;

export default appSlice.reducer;
