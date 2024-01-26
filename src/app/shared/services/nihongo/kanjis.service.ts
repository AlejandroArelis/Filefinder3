import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kanji } from '../../Models/kanji.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class KanjisService {

  baseUrl = `${environment.apiUrl}/Kanji`;

  constructor(private _http: HttpClient) {}

  get() {
    return this._http.get<Kanji[]>(`${this.baseUrl}`);
  }

  getById(id:number) {
    return this._http.get<Kanji>(`${this.baseUrl}/${id}`);
  }
}
