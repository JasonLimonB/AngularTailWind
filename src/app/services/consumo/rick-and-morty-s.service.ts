import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortySService {

  constructor(private http: HttpClient) { }

  public getPersonajes(): any{
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

}
