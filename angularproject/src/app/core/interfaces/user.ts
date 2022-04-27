import { IBase } from "./base";

export interface IUser extends IBase{
  userId: string;
  email: string;
  password: string;
  ads: string[]
}
