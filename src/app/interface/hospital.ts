import { appointment } from './appointment';
export interface hospital {
  appointment: appointment;
  hospitalName: string;
  contactNo: number;
  hospitalEmail: string;
  openingDate: Date;
  ownerName: string;
  ownerContact: number;
  OwnerEmail: string;
  city: string;
  password: string;
  id?: string;
}
