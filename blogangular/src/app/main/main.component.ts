import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { IPost } from '../model/interfaces/ipost';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public mainPost : IPost;
  public secondaryPosts : IPost[] = [];
  public olderPosts : IPost[] = [];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

  public ngOnInit() : void {
    let postsPromise = this.postService.getAll();
    const userPromise = this.userService.getAll();

    Promise.all([postsPromise, userPromise])
      .then(([posts, users]) => {

        for(let post of posts){
          const user = users.find(user => user.id === post.userId);

          if (!!user) post.userName = user.name;
        }

        return posts;
      })
      .then(posts => {
        this.mainPost = posts.shift();
        this.secondaryPosts = posts.slice(0,3);
        this.olderPosts = posts.slice(3);
      });
  }
}
