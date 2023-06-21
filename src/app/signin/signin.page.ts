import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthErrorInterface } from '../types/auth/auth-error.interface';
import { Store } from '@ngrx/store';
import { errorSelector, isSubmittingSelector } from '../store/auth/selectors';
import { SigninRequestInterface } from '../types/auth/signin-request.interface';
import { signinAction } from '../store/auth/actions/signin.action';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  error$: Observable<AuthErrorInterface | null>;

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
      emailusername: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.error$ = this.store.select(errorSelector);
  }

  onSubmit() {
    if (this.form.valid) {
      const request: SigninRequestInterface = {
        user: this.form.value
      }
      this.store.dispatch(signinAction({ request }));
    }
  }

}
