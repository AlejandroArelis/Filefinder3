import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Kanji } from '@models/kanji.model';

@Injectable({
  providedIn: 'root',
})
export class KanjiService {

  private baseUrl = `${environment.apiUrl}/nihongo/Kanji`;

  private _http = inject(HttpClient);

  get() {
    return this._http.get<Kanji[]>(`${this.baseUrl}`);
  }

  getById(id:number) {
    return this._http.get<Kanji>(`${this.baseUrl}/${id}`);
  }

  post(kanji: Kanji) {
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
    return this._http.post(this.baseUrl, kanji, { headers });
  }
}
