import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/interfaces/iuser';
import { UserService } from '../services/user.service';

@Component({
selector: 'app-post-add-edit',
templateUrl: './post-add-edit.component.html',
styleUrls: ['./post-add-edit.component.scss']
})
export class PostAddEditComponent implements OnInit{

    public isReady: Boolean;
    public authors: IUser[];

    public constructor(
        private userService: UserService
    ) {}

    public ngOnInit() : void {
        this.isReady = false;

        this.userService
            .getAll()
            .then(users => {
                this.authors = users;

                this.isReady = true;
            })
            .catch(exception => {
                console.info(exception);
            });
    }
}