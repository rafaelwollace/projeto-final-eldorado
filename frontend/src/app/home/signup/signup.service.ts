import { Signup } from './signup';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

 createSignup(Signup: Signup){
   return this.http.post('http://localhost:3000/api/signup', Signup);
 }
}
