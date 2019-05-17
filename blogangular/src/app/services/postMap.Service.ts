import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { IPost } from '../model/interfaces/ipost';

@Injectable()
export class PostMapService {

    public constructor() {}

    public mapIPostToPost(post: IPost) : Post {
        return {
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body,
            userName: ''
        };
    }
}