import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';

const routes: Routes = [
  {
    path: 'post/:postId',
    component: PostComponent
  },
  {
    path: 'author/:authorId',
    component: AuthorComponent
  },
  {
    path: 'addPost',
    component: PostAddEditComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
