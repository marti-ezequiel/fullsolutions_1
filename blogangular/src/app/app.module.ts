import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavegationComponent } from './navegation/navegation.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { AuthorAddEditComponent } from './author-add-edit/author-add-edit.component';
import { PostMapService } from './services/postMap.service';
import { UserMapService } from './services/userMap.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegationComponent,
    MainComponent,
    PostComponent,
    AuthorComponent,
    PostItemComponent,
    PostAddEditComponent,
    AuthorAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    UserService,
    PostMapService,
    UserMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
