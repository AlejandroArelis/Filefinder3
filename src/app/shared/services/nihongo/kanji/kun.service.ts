import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../../Models/kanji.model';

@Injectable({
  providedIn: 'root',
})
export class KunService {
  baseUrl = `${environment.apiUrl}/nihongo/Kanji/Kun`;

  constructor(private _http: HttpClient) {}

  get(id: number) {
    return this._http.get<Item>(`${this.baseUrl}/${id}`);
  }

  post(item: Item) {
    return this._http.post<Item>(`${this.baseUrl}`, item);
  }
}
