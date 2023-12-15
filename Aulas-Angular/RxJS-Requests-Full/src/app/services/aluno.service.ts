
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../Models/Aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private urlAlunos = 'http://localhost:3000/alunos'

  constructor(private httpRequest: HttpClient) { }

  listarAlunos(): Observable<Aluno[]> {
    return this.httpRequest.get<Aluno[]>(this.urlAlunos)
  }
  buscarAluno(id: number): Observable<Aluno> {
    return this.httpRequest.get<Aluno>(`${this.httpRequest}/${id}`)
  }
  cadastrarAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpRequest.post<Aluno>(this.urlAlunos, aluno)
  }
  deletarAluno(id: number): Observable<any> {
    return this.httpRequest.delete<any>(`${this.urlAlunos}/${id}`);
  }
  
}
