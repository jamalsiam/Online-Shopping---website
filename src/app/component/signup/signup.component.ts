import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './validators/mustMatch.validator';
import { SignupService } from './service/signup.service';
import { CookieService } from 'src/app/framework/cookie/cookie.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', './../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder, private signupService: SignupService, private cookieService: CookieService) { }



  // convenience getter for easy access to form fields
  get _signupForm() { return this.signupForm.controls; }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onSubmit() {

    this.loading = true;
    if (this.signupForm.invalid) {
      this.markFormGroupTouched(this.signupForm);
      this.loading = false;
      return;
    }

    this.signupService.signup(this.signupForm.value).subscribe(res => {
      console.log(res);
      this.cookieService.setUserInfo(res)
    }, (err) => {
      this.loading = false;
      if (err.status === 409) {
        if (err.error.email) {
          this.signupForm.controls['email'].setErrors({ 'alreadyExist': true });
        }
      }
    }, () => {
      this.loading = false;
    })

  }

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
}
