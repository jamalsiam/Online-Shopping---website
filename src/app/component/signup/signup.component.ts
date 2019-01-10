import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './validators/mustMatch.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss','./../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }


    // convenience getter for easy access to form fields
    get _signupForm() { return this.signupForm.controls; }

    onSubmit() {

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value))
    }

}
