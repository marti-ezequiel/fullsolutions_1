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

  public posts : IPost[] = [];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

  public ngOnInit() : void {
    
  }
}
