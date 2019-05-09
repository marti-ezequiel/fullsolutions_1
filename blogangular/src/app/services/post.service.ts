import { Injectable } from '@angular/core';
import { IPost } from '../model/ipost';

@Injectable()
export class PostService {

    public posts: IPost[] = [];

    constructor(){

    }
}