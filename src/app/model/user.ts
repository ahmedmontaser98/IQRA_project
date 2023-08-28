import { DocumentData } from 'firebase/firestore';
export interface User extends DocumentData {
  id: string;
  email: string;
  password: string;
}
