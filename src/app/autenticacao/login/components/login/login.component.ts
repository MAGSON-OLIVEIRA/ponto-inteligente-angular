import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from '../../models';
import {LoginService} from  '../../services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // grupo de componetes do formulario
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,  // msn de erro ou ok na tela
    private routes: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }
  gerarForm(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  logar(){
    if(this.form.invalid){
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
        .subscribe(
          data => {
            console.log(JSON.stringify(data));
            localStorage['token'] = data['data']['token'];

            const usuarioDta = JSON.parse(
              atob(data['data']['token'].split('.')[1]));
            
            console.log(JSON.stringify(usuarioDta));

            if(usuarioDta['role'] == 'ROLE_ADMIN'){
              this.routes.navigate(['/admin']);
            }else{
              this.routes.navigate(['/funcionario']);
            }
          },
          err =>{
            console.log(JSON.stringify(err));
            let msn: string = "Tente novamente. ";
            if(err['status'] == 401){
              msn = "E-mail ou senha inválidos."
            }
            this.snackBar.open(msn, "Erro", {duration: 5000});
          }
        )
  }
}
