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
    this.postService.getAll().then(posts => {

      for(let post of posts) {
        this.userService.get(post.id)
          .then(user => {
            post.userName = user.name;
          });
      }
      
      this.mainPost = posts.shift();
      this.secondaryPosts = posts.slice(0,3);
      this.olderPosts = posts.slice(3);
    })
  }
}
