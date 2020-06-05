import { CadastroPf } from './../../models';
import { Component, OnInit } from '@angular/core';
import {CpfValidator, CnpjValidator} from '../../../../shared/validators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { CadastroPfService } from '../../services'

@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snsckBar: MatSnackBar,
    private router: Router,
    private cadastroPfService: CadastroPfService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      cpf: ['', [Validators.required, CpfValidator]],
      cnpj: ['', [Validators.required, CnpjValidator]],
      valorHora: ['',[Validators.required]],
      qtdHorasTrabalhadaDia: ['',[Validators.required]],
      qtdHorasAlmoco:['',[Validators.required]]
    });
  }

  cadastroPf(){
    if(this.form.invalid){
      return;
    }
    const cadastroPf: CadastroPf = this.form.value;
    console.log(JSON.stringify(cadastroPf));
    this.cadastroPfService.cadastrar(cadastroPf)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const msn: string = "Salvo com sucesso.";
          this.snsckBar.open(msn, "Sucesso", {duration: 500});
          this.router.navigate(['/login']);
      },
      err => {
        console.log(JSON.stringify(err));
        let msn: string = "Erro tente novamente";
        if(err.status == 400){
          msn: err.err.error.join(' ');
        }
        this.snsckBar.open(msn, "Erro", {duration: 500})
      }
     );
     return false;
  }


}
