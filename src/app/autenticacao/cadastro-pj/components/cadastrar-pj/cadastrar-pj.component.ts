import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {CadastroPj} from '../../models'
import {CpfValidator, CnpjValidator} from '../../../../shared/validators'
import {CadastroPjService} from  '../../services'

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snsckBar: MatSnackBar,
    private router: Router ,
    private cadastroPjService: CadastroPjService) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['',[Validators.required, Validators.minLength(5)]],
      cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required,CnpjValidator]]
    });
  }

  cadastrarPj(){
    if(this.form.invalid){
      return;
    }

    const cadastroPj: CadastroPj = this.form.value;
    console.log(JSON.stringify(cadastroPj));
    
    this.cadastroPjService.cadastrar(cadastroPj)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const msn: string = "Salvo com sucesso";
          this.snsckBar.open(msn, "Sucesso", {duration: 5000});
          this.router.navigate(['/login']);
          
        },

        err => {
          console.log(JSON.stringify(err));
          let msn: string = "Erro tente novamente";
          if(err.status == 400){
            msn = err.error.errors.join(' ');
          }
          this.snsckBar.open(msn, "Erro", {duration: 5000})
        }
      );
      return false;
  }
}
