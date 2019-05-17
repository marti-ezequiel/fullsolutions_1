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

    public isReady: boolean;
    public enableInput: boolean;
    public authors: IUser[];

    public post: Post = new Post(0, "", "");

    public constructor(
        private userService: UserService,
        private postService: PostService,
        private router: Router
    ) {}

    public ngOnInit() : void {
        this.isReady = false;
        this.enableInput = true; 

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
        this.enableInput = false;

        this.postService
            .savePost(this.post)
            .then(res => {
                this.router.navigate(['/']);
            })
            .finally(() => {
                this.enableInput = true; 
            });
    }
}