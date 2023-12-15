import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Models/Post'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpRequest: HttpClient) {

  }

  //URLS
  private urlPost: string = 'https://jsonplaceholder.typicode.com/posts';

  //Métodos para retornar todas as postagens

  listarPostagens(): Observable<Post[]> {
    return this.httpRequest.get<Post[]>(this.urlPost)
  }

  //Observable: Observador que faz requisições e verificações, requisições em períodos de tempo
  //Subscriber: Recebe o retorno das requisições

}
