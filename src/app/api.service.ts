import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = ''; //variable vacía para almacenar el token que nos devuelve el post
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https:// ENDPOINT / LOGIN'; //establecemos el endpoint ( NO REAL )
  }

  //Petición login, que pasa al endpoint un email y una password usando un Observable para manejar la solicitud de inicio de sesión
  login(payload: { email: string, password: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, payload);
  }

  //Método para almacenar el token dado por el backend en la memoria del navegador
  setToken(token: any) {
    token = localStorage.setItem('token', token);
  }

  //Método para obtener el token almacenado en la memoria del navegador
  getToken() {
    return localStorage.getItem('token');
  }

  //Método para comprobar si el usuario está autenticado
  isAuth() {
    if (localStorage.getItem('token') != '') {
      return true;
    } else {
      return true; // AQUI DEBERÍA PONER FALSE, PERO NO NOS ESTAMOS CONECTANDO A UN ENDPOINT QUE NOS DEVUELVA UN TOKEN
    }
  }
}
