import { Injectable } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { UserMapService } from './userMap.service';
import { User } from '../model/user';

@Injectable()
export class UserService {
    public constructor(
        private httpClient : HttpClient,
        private mapper: UserMapService
    ){ }

    public getAll() : Promise<User[]> {
        return this.httpClient
            .get<IUser[]>(`https://jsonplaceholder.typicode.com/users/`)
            .toPromise()
            .then(users => users.map(user => this.mapper.mapIUserToUser(user)));
    }

    public get(id: number) : Promise<User> {
        return this.httpClient
            .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .toPromise()
            .then(user => this.mapper.mapIUserToUser(user));
    }
}