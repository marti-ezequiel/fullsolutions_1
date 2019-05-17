import { IPost } from './interfaces/ipost';

export class Post implements IPost {
    userId: number;
    id: number;
    title: string;
    body: string;

    userName: string;

    public constructor(
        userId: number,
        title: string,
        body: string
    ) {
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
    
    public constructor(
        id: number,
        userId: number,
        title: string,
        body: string
    ) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}