import { Injectable } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';

@Injectable()
export class UserService {

    public users: IUser[] = [];

    constructor(){

        fetch('https://jsonplaceholder.typicode.com/users', { method: "get" })
            .then((response) => {
                return response.json();
            })
            .then((data : IUser[]) => {
                this.users = data;
            })
            .catch((exception) => {
                console.info(exception);
            });
    }
}