import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { NavegationComponent } from './navegation/navegation.component';
import { TestComponent } from './test/test.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { PersonService } from './services/person.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PostComponent,
    AuthorComponent,
    NavegationComponent,
    TestComponent,
    TestTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PersonService,
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
