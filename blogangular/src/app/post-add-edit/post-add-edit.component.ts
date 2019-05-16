import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { UserService } from '../services/user.service';
import { Post } from '../model/post';
import { IPost } from '../model/interfaces/ipost';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
selector: 'app-post-add-edit',
templateUrl: './post-add-edit.component.html',
styleUrls: ['./post-add-edit.component.scss']
})
export class PostAddEditComponent implements OnInit{

    public enableSubmit: boolean;
    public enableInput: boolean;
    public isReady: boolean;
    public authors: IUser[];

    public postUserId: number;
    public postTitle: string;
    public postBody: string;

    public constructor(
        private userService: UserService,
        private postService: PostService,
        private router: Router
    ) {}

    public ngOnInit() : void {
        this.isReady = false;
        this.enableSubmit = false;
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
        this.EvaluateSubmit();
        if (!this.enableSubmit) return;

        const post : IPost = new Post(this.postUserId, this.postTitle, this.postBody);
        
        this.enableInput = false;
        this.enableSubmit = false

        this.postService
            .savePost(post)
            .then(res => {
                this.router.navigate(['/']);
            })
            .finally(() => {
                this.enableInput = true;
                this.EvaluateSubmit();
            });
    }

    public EvaluateSubmit() : void {
        this.enableSubmit = this.enableInput && this.postUserId > 0 && !!this.postTitle && this.postTitle.length > 3 && !!this.postBody && this.postBody.length > 10 ;
    }
}