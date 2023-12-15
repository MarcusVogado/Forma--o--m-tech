import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../Models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private httpEndereco: HttpClient) { }
  private enderecoUrl = "https://viacep.com.br/ws/"
  buscarEndereco(cep?: number): Observable<Endereco> {
    return this.httpEndereco.get<Endereco>(`${this.enderecoUrl}/${cep}/json/`)
  }

}
