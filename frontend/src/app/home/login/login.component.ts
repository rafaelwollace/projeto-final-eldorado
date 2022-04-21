import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email= '';
  password= '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router) {}

  ngOnInit(): void {}


  login(){
    this.authService.autentica(this.email, this.password).subscribe({
      next: (res) => {
        this.router.navigate(['category']);
      },
      error: (err) => {
        alert('Erro ao efetuar login');
      },
   });



  }
}
