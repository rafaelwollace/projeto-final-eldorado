import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autentica(email:string, password:string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/signin', {
      email: email,
      password: password,
    })
  }
}

