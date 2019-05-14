import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { IUser } from '../model/interfaces/iuser';
import { IPost } from '../model/interfaces/ipost';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  public user : IUser;
  public posts : IPost[];

  public isReady : Boolean;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private userService: UserService
  ) { }

  public ngOnInit() : void {
    this.isReady = false;
    
    this.activatedRoute.paramMap.subscribe(p => {
      if (p.keys.includes("authorId")){

        const authorId = +p.get("authorId");

        const authorPromise = this.userService.get(authorId);
        const postsPromise = this.postService.getByUserId(authorId);

        Promise
          .all([authorPromise, postsPromise])
          .then(([author, posts]) => {
            this.user = author;
            this.posts = posts;

            this.isReady = true;
           })
           .catch(exception => {
             console.info(exception);
           });
      }

    })
  }

}
