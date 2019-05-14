import { Injectable } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
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
}