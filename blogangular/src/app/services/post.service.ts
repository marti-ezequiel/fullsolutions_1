import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostMapService } from './postMap.service';
import { Post } from '../model/post';

@Injectable()
export class PostService {
    private hardCodedPosts : IPost[] = [];
    
    public constructor(
        private httpClient : HttpClient,
        private mapper: PostMapService
    ){ }

    public getAll() : Promise<Post[]> {
        return this.httpClient
            .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
            .toPromise()
            .then(posts => {
                return this.hardCodedPosts.concat(posts.slice(0, 15));
            })
            .then(posts => {
                return posts.map((value) => this.mapper.mapIPostToPost(value));
            });
    }

    public getByUserId(id: number) : Promise<Post[]> {
        return this.httpClient
            .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`,{ 
                params: new HttpParams()
                    .set('userId', id.toString()) 
                }
            )
            .toPromise()
            .then(posts => {
                return this.hardCodedPosts.filter(post => post.userId == id).concat(posts);
            })
            .then(posts => {
                return posts.map((value) => this.mapper.mapIPostToPost(value));
            });
    }

    public get(id: number) : Promise<Post> {

        if(id >= 101) return new Promise(resolve => {
            resolve(this.mapper.mapIPostToPost(this.hardCodedPosts.find(post => post.id == id)));
        });

        return this.httpClient
            .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .toPromise()
            .then(post => this.mapper.mapIPostToPost(post));
    }

    public savePost(post: Post) : Promise<void> {
        post.id = 101 + this.hardCodedPosts.length;

        return this.httpClient
            .post('https://jsonplaceholder.typicode.com/posts', this.mapper.mapPostToIPost(post))
            .toPromise()
            .then(res => {
                this.hardCodedPosts.unshift(this.mapper.mapPostToIPost(post));
            })
            .catch(exception => {
                console.info(exception);
            });
    }
}