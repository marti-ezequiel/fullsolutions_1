import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';

@Injectable()
export class PostService {

    public mainPost: IPost;
    public secondaryFPost: IPost;
    public secondarySPost: IPost;
    public secondaryTPost: IPost;

    public olderPosts: IPost[] = [];

    constructor(){

        new Promise<IPost[]>((res, rej) => {

        })

        fetch('https://jsonplaceholder.typicode.com/posts', { method: "get"}     )
            .then((response) => {

                return response.json();
            })
            .then((data : IPost[]) => {

                this.mainPost = data.shift();

                this.secondaryFPost = data.shift();
                this.secondarySPost = data.shift();
                this.secondaryTPost = data.shift();

                this.olderPosts = data.slice(0, 10);
            })
            .catch((exception) => {
                console.info(exception);
            });

    }
}