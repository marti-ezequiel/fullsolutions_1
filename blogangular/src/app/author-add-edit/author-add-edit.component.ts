import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
selector: 'app-author-add-edit',
templateUrl: './author-add-edit.component.html',
styleUrls: ['./author-add-edit.component.scss']
})
export class AuthorAddEditComponent implements OnInit {

    public userForm: FormGroup;
    public serverError: string;

    public constructor(
        private userService: UserService,
        private builder : FormBuilder,
        private router: Router
    ) { }

    public ngOnInit() : void {
        this.userForm = this.builder.group({
            userName: this.builder.control('', {
                validators: Validators.compose([Validators.required, Validators.minLength(5)]),
                updateOn: 'blur'
            }),
            name: this.builder.control('', {
                validators: Validators.compose([Validators.required, Validators.minLength(3)]),
                updateOn: 'blur'
            }),
            email: this.builder.control('', {
                validators: Validators.compose([Validators.required, Validators.email]),
                updateOn: 'blur'
            })
        });
    }

    public sendAuthor() : void {

        if (this.userForm.invalid) { 
            this.serverError = "Al menos uno de los campos es inválido";
            return;
        }

        const user = new User(
            0,
            this.userForm.get('userName').value,
            this.userForm.get('name').value,
            this.userForm.get('email').value
        );

        this.userService
            .saveUser(user)
            .then(res => {
                this.serverError = "";

                this.router.navigate(['/']);
            })
            .catch(exception => {
                this.serverError = exception;
            })
            .finally(() => {
            });
    }
}