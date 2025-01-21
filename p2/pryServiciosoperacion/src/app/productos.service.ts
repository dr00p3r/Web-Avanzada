import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    private apiUrl = 'https://api.allorigins.win/raw?url=' + 
      encodeURIComponent('https://drive.google.com/uc?export=download&id=1AUzgzBiU2cWUdfKF9OnWnK3KECtPllMb'); 
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
      return this.http.get<any>(this.apiUrl); // Recuperar el archivo JSON desde Drive
  }
}