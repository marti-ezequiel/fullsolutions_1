import { IPost } from './interfaces/ipost';

export class Post implements IPost {
    userId: number;    
    id: number;
    title: string;
    body: string;
}