import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Carro } from './carro';


@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.apiUrl);
  }

}

