import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { IPhoto } from '../interfaces/photo-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpFakeService {

  private _urlFakePhotos = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getAllPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this._urlFakePhotos);
  }
}
