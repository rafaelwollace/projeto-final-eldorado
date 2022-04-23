import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Signup } from './signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  newSignupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService
    ) { }

  ngOnInit(): void {
    this.newSignupForm = this.formBuilder.group({
      email: [''],
      password: [''],
      name:[''],
    });
  }

  cadastrar(){
    const newUSer = this.newSignupForm.getRawValue() as Signup;
  }
}
