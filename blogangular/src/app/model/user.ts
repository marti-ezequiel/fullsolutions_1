import { IUser } from './interfaces/iuser';
import { IAddress } from './interfaces/iaddress';
import { ICompany } from './interfaces/icompany';

export class User implements IUser {
    id: number;    
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;

    constructor() { }
}