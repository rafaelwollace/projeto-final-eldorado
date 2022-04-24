import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from './signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  newSignupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router

    ) { }

  ngOnInit(): void {
    this.newSignupForm = this.formBuilder.group({
      email:[''],
      password:[''],
      name:[''],
    });
  }

  cadastrar(){
    const novoUsuario = this.newSignupForm.getRawValue() as Signup;
    this.signupService.createSignup(novoUsuario).subscribe(
    ()=>{
      this.router.navigate(['']);
      },
      (error) => {
        console.log('error');
      }
    )
  }
}
