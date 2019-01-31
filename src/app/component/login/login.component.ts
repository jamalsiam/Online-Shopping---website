import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'src/app/framework/cookie/cookie.service';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private router: Router,
    private loginService: LoginService) { }

  get _signinForm() { return this.signinForm.controls; }


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
    if (this.signinForm.invalid) {
      this.markFormGroupTouched(this.signinForm);
      this.loading = false;
      return;
    }

    this.loginService.login(this.signinForm.value).subscribe(res => {
      this.cookieService.setUserInfo(res);
      
      location.reload()
      this.router.navigate(['']);
    }, (err) => {
      this.loading = false;
      if (err.status === 401) {

        this.signinForm.controls['password'].setErrors({ 'invalidEmailOrPassword': true });

      }
    }, () => {
      this.loading = false;
    })

  }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
