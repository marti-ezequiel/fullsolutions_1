import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class PostService {
    public constructor(
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

    public getByUserId(id: number) : Promise<IPost[]> {
        return this.httpClient
            .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`,{ 
                params: new HttpParams()
                    .set('userId', id.toString()) 
                }
            )
            .toPromise();
    }
}