import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class PostService {
    private hardCodedPosts : IPost[] = [];
    
    public constructor(
        private httpClient : HttpClient
    ){ }

    public getAll() : Promise<IPost[]> {
        return this.httpClient
            .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
            .toPromise()
            .then(posts => {;
                return this.hardCodedPosts.concat(posts.slice(0, 15));
            });
    }

    public getByUserId(id: number) : Promise<IPost[]> {
        return this.httpClient
            .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`,{ 
                params: new HttpParams()
                    .set('userId', id.toString()) 
                }
            )
            .toPromise()
            .then(posts => {
                return this.hardCodedPosts.filter(post => post.userId == id).concat(posts);
            });
    }

    public get(id: number) : Promise<IPost> {

        if(id >= 101) return new Promise((resolve) => {
            resolve(this.hardCodedPosts.find(post => post.id === id));
        });

        return this.httpClient
            .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .toPromise();
    }

    public savePost(post: IPost) : Promise<any> {
        post.id = 101 + this.hardCodedPosts.length;

        return this.httpClient
            .post('https://jsonplaceholder.typicode.com/posts', post)
            .toPromise()
            .then(res => {
                this.hardCodedPosts.unshift(post);
            })
            .catch(exception => {
                console.info(exception);
            });
    }
}