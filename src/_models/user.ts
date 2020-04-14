import { Photo } from './photo';

export interface User {
  Id: string;
  username: string;
  KnownAs: string;
  Age: string;
  Gender: string;
  created: Date;
  lastActive: Date;
  PhotoUrl: string;
  City: string;
  Country: string;
  Interests?: string;
  Introduction?: string;
  LookingFor?: string;
  Photos?: Photo[];
}
