import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupRequestInterface } from '../types/auth/signup-request.interface';
import { signupAction } from '../store/auth/actions/signup.action';
import { Store, select } from '@ngrx/store';
import { errorSelector, isSubmittingSelector } from '../store/auth/selectors';
import { Observable } from 'rxjs';
import { AuthErrorInterface } from '../types/auth/auth-error.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  error$: Observable<AuthErrorInterface>;

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.initializeForm();
    this.initializeValues();
  }

  ionViewWillEnter() {

    this.form.reset();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      const request: SignupRequestInterface = {
        user: this.form.value
      }
      this.store.dispatch(signupAction({ request }));
    }
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
