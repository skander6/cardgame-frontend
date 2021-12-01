import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/game/getCards';
  constructor(private http: HttpClient) { }


  getCards() : Observable<any>{
    return this.http.get(this.url);
  }
}
