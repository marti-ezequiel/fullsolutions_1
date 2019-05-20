import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { IPost } from '../model/interfaces/ipost';

@Injectable()
export class PostMapService {
    
    public mapIpostStringToPost (post: IPost, userName: string) : Post {
        return {
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body,

            userName: userName
        }
    }

    public mapIpostToPost (post: IPost) : Post {
        return this.mapIpostStringToPost(post, '');
    }

    public mapPostToIpost (post: Post) : IPost {
        return {
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body,
        }
    }
}