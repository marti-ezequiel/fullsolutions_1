import { Injectable } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { UserMapService } from './userMap.service';
import { User } from '../model/user';

@Injectable()
export class UserService {
    private hardCodedUsers : IUser[] = [];

    public constructor(
        private httpClient : HttpClient,
        private mapper: UserMapService
    ){ }

    public getAll() : Promise<User[]> {
        return this.httpClient
            .get<IUser[]>(`https://jsonplaceholder.typicode.com/users/`)
            .toPromise()
            .then(users => this.hardCodedUsers.concat(users.map(user => this.mapper.mapIUserToUser(user))));
    }

    public get(id: number) : Promise<User> {
        
        if(id >= 101) return new Promise(resolve => 
            resolve(this.mapper.mapIUserToUser(this.hardCodedUsers.find(user => user.id == id)))
        );

        return this.httpClient
            .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .toPromise()
            .then(user => this.mapper.mapIUserToUser(user));
    }

    public saveUser(user: User) : Promise<number> {

        return new Promise<number> ((resolve, reject) => {

            this.getAll()
                .then(users => {
                    const sameUser = users.find(storedUser => storedUser.username == user.username);
                    
                    if(!!sameUser) { 
                        reject("El Nombre de Usuario ya existe.");
                        return;
                    }

                    user.id = 101 + this.hardCodedUsers.length;

                    this.httpClient
                        .post('https://jsonplaceholder.typicode.com/users', this.mapper.mapUserToIUser(user))
                        .toPromise()
                        .then(res => {
                            this.hardCodedUsers.unshift(this.mapper.mapUserToIUser(user));

                            resolve(user.id);
                        })
                        .catch(exception => {
                            console.info(exception);
                        });
                })
        })
    }
}