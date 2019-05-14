import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

    constructor(
        private httpClient : HttpClient
    ){ }

    public getAll() : Promise<IPost[]> {
        return this.httpClient
            .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
            .toPromise()
            .then(posts => {
                return posts.slice(0, 15);
            });
    }

    public get(id: number) : Promise<IPost> {
        return this.httpClient
            .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .toPromise();
    }
}