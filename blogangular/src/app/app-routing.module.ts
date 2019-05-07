import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { TestComponent } from './test/test.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test-two',
    component: TestTwoComponent
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
