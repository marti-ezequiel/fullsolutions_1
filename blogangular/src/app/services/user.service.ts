import { Injectable } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    private users :IUser[];

    constructor(
        private httpClient : HttpClient
    ){ }

    public getAll() : Promise<IUser[]> {
        return this.httpClient
            .get<IUser[]>(`https://jsonplaceholder.typicode.com/users/`)
            .toPromise();
    }

    public get(id: number) : Promise<IUser> {
        return this.httpClient
            .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .toPromise();
    }
    
    public getFromCache(id: number) : IUser {
        return this.getAllCache().find(user => user.id == id);
    }
    
    private getAllCache() : IUser[] {
        if (!!this.users) 
            this.getAll().then(users => { this.users = users; });

        return this.users;
    }
}