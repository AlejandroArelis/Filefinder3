import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kanji } from '../../../models/kanji.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class KanjiService {

  private baseUrl = `${environment.apiUrl}/nihongo/Kanji`;

  constructor(private _http: HttpClient) {}

  get() {
    return this._http.get<Kanji[]>(`${this.baseUrl}`);
  }

  getById(id:number) {
    return this._http.get<Kanji>(`${this.baseUrl}/${id}`);
  }
}
