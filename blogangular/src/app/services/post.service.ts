import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class PostService {

    constructor(
        private httpClient : HttpClient,
        private userService: UserService
    ){ }

    public getAll() : Promise<IPost[]> {

        const postPromise = this.httpClient
            .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
            .toPromise();

        const userPromise = this.userService.getAll();

        Promise
            .all([postPromise, userPromise])
            .then(([posts, users]) => {
                users = users.slice(0,15);

                for(let post of posts){
                    post.userName = users.find(user => user.id === post.userId).name;
                }

                return users;
        });
    }

    public get(id: number) : Promise<IPost> {
        return this.httpClient
            .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .toPromise();
    }
}