import { CadastroPj } from './../models/cadastro-pj.model';
import { environment as env } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CadastroPjService{
    private readonly PATH: string = '/cadastrar-pj';
    constructor(private http: HttpClient){ }
    
    cadastrar(cadastroPj: CadastroPj): Observable<any>{
        return this.http.post(env.baseApiUrl+this.PATH, cadastroPj);
    }
}