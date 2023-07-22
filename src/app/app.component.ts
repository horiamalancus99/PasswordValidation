import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PasswordValidation';

  loginForm : FormGroup; 

  constructor(){

    this.loginForm = new FormGroup({
      Password : new FormControl("", [Validators.required]),
      ConfirmPassword : new FormControl("", [Validators.required])
    },
    {
      validators : passwordMatchValidator
    })
  }

  login(){
    console.log(this.loginForm.value);
  }
}
