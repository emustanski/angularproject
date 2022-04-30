import { IBase } from './base';

export interface IUser extends IBase {
  uid: string;
  email: string;
  name: string;
  photURL?: string;
}
