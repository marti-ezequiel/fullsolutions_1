import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post : IPost;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(p => {
      if (p.keys.includes("postId")){

        const postId = +p.get("postId");

        this.postService
          .get(postId)
          .then(post => {

            this.userService
              .get(post.userId)
              .then(user => {

                post.userName = user.name;
                this.post = post;
              });
          });
      }
    })
  }
}
