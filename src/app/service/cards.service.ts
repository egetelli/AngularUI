import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl = 'https://localhost:7262/api/cards';

  constructor(private http: HttpClient) { }

  // Get All Cards
  getAllCards(): Observable<Card[]>{
    return this.http.get<Card[]>(this.baseUrl);
  }
}
