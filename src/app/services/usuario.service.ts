import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private login = false
  constructor(private http:HttpClient) { }

  getLogin(){
    return localStorage.getItem('logado')
  }

  setLogin(login: boolean){
    localStorage.setItem('logado', String(login))
  }
}
