import { User } from '../auth.service';
import { IBase } from './base';
import { IUser } from './user';

export interface IAd extends IBase {
  headline: string;
  company: string;
  description: string;
  location: string;
  username: string;
}