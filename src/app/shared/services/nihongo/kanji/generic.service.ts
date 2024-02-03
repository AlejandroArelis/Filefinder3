import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { TagConfiguration } from '@models/tagConfiguration.model';
import { KanjiGeneric } from '@models/kanji.model';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  private baseUrl = `${environment.apiUrl}`;

  private _http = inject(HttpClient);

  // get(configuration: TagConfiguration) {
  //   return this._http.get<Generic>(`${this.baseUrl}/${id}`);
  // }

  post(configuration: TagConfiguration) {
    return this._http.post<KanjiGeneric>(`${this.baseUrl}${configuration.controllerUrl}`, configuration.actual);
  }

  delete(configuration: TagConfiguration) {
    return this._http.delete<KanjiGeneric>(`${this.baseUrl}${configuration.controllerUrl}/${configuration.actual?.id}`);
  }
}
