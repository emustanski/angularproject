import { IBase } from "./base";

export interface IUser extends IBase{
  uid: string;
  email: string;
  password: string;
}
