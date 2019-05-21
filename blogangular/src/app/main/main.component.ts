import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public mainPost : Post;
  public secondaryPosts : Post[] = [];
  public olderPosts : Post[] = [];

  public constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

  public ngOnInit() : void {
    let postsPromise = this.postService.getAll();
    const userPromise = this.userService.getAll();

    Promise.all([postsPromise, userPromise])
      .then(([posts, users]) => {

        for(let post of posts){
          const user = users.find(user => user.id == post.userId);

          if (!!user) post.userName = user.name;
        }

        return posts;
      })
      .then(posts => {
        this.mainPost = posts.shift();
        this.secondaryPosts = posts.slice(0,3);
        this.olderPosts = posts.slice(3);
      })
      .catch(exception => {
        console.info(exception);
      });
  }
}
