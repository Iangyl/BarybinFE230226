import { IUser } from 'lib/userInterface';

export interface IState {
  users: IUser[];
  currentUser: IUser | null;
}
