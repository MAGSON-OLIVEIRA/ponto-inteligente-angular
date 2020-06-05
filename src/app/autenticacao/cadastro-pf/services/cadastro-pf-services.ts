import { environment as env } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { CadastroPf } from '../'

@Injectable()
export class CadastroPfService{
    private readonly PATH: string = '/cadastro-pf';

    constructor(private http: HttpClient){    }
    cadastrar(cadastroPf: CadastroPf): Observable<any>{
        return this.http.post(env.baseApiUrl+this.PATH, cadastroPf);
    }
}