import { hospital } from './hospital';
export interface User {
  data: any;
  hospitalName: string;
  password: string;
  id?: string;
}
export interface login {
  name: string;
  password: string;
  hospitalName : string
}
