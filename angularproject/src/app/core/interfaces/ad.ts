import { IBase } from './base';

export interface IAd extends IBase {
  headline: string;
  company: string;
  description: string;
  location: string;
}
