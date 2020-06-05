import { CadastroPj } from '../';
import { environment as env } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CadastroPjService{
    private readonly PATH: string = '/cadastro-pj/salvar';
    constructor(private http: HttpClient){ }
    
    cadastrar(cadastroPj: CadastroPj): Observable<any>{
        return this.http.post(env.baseApiUrl+this.PATH, cadastroPj);
    }
}
