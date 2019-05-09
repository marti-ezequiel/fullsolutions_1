import { Injectable } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';

@Injectable()
export class PostService {

    public posts: IPost[] = [];

    constructor(){

    }
}