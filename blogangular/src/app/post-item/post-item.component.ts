import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../model/interfaces/ipost';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
  public post : IPost;

  constructor() { }

  ngOnInit() {
  }

}
