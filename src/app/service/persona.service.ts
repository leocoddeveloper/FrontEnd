import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  apiURL = 'https://backendleo1.herokuapp.com/persona/traer'; 
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<any>{
    return this.http.get<any>(this.apiURL);
  }
}
