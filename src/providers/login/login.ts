import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  private baseURL='https://viacep.com.br/ws'
  constructor(public http: Http) {}

  localizarDuvida(Nome:string,Email:string,Duvidas:string){
    return this.http.get(`${this.baseURL}${Nome}/${Email}/${Duvidas}/json/`);
  } 

}
