import { Injectable } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';

@Injectable()
export class UserService {

    public users: IUser[] = [];

    constructor(){

    }
}