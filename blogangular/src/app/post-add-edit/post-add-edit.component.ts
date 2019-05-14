import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { UserService } from '../services/user.service';
import { Post } from '../model/post';
import { IPost } from '../model/interfaces/ipost';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-post-add-edit',
templateUrl: './post-add-edit.component.html',
styleUrls: ['./post-add-edit.component.scss']
})
export class PostAddEditComponent implements OnInit{

    public disabledButton: boolean;

    public isReady: boolean;
    public authors: IUser[];

    public postTitle: string;
    public postBody: string;
    public postUserId: number;

    public constructor(
        private userService: UserService,
        private postService: PostService,
        private router: Router
    ) {}

    public ngOnInit() : void {
        this.isReady = false;

        this.userService
            .getAll()
            .then(users => {
                this.authors = users;

                this.isReady = true;
            })
            .catch(exception => {
                console.info(exception);
            });
    }

    public sendPost() : void {
        const post : IPost = new Post(this.postUserId, this.postTitle, this.postBody);
        
        this.disabledButton = true;

        this.postService
            .savePost(post)
            .then(res => {
                this.router.navigate(['/']);
            })
            .finally(() => {
                this.disabledButton = false;
            });
    }
}