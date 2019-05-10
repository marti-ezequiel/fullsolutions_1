import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';

@Injectable()
export class PostService {

    public mainPost: IPost;

    public secondaryPosts: IPost [] = [];
    public olderPosts: IPost[] = [];

    constructor(){

        new Promise<IPost[]>((res, rej) => {

        })

        fetch('https://jsonplaceholder.typicode.com/posts', { method: "get" })
            .then((response) => {
                return response.json();
            })
            .then((data : IPost[]) => {

                this.mainPost = data.shift();

                this.secondaryPosts = data.slice(0, 3);

                this.olderPosts = data.slice(3, 10);
            })
            .catch((exception) => {
                console.info(exception);
            });

    }
}