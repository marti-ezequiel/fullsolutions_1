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

    constructor();
    constructor(id: number, userName: string, name: string, email: string);
    constructor(id?: number, userName?: string, name?: string, email?: string) 
    { 
        this.id = id || 0;
        this.username = userName || '';
        this.name = name || '';
        this.email = email || '';
    }
}