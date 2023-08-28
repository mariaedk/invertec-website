import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IbgeUf } from '../models/IbgeUF';
import { Observable } from 'rxjs';
import { IbgeLocalidade } from '../models/IbgeLocalidade';

@Injectable({
  providedIn: 'root'
})
export class IbgeApiService {

  constructor(private httpClient: HttpClient) { }

  getUfs(): Observable<IbgeUf[]> {
    return this.httpClient.get<IbgeUf[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  }

  getMunicipiosByUf(idUf: number): Observable<IbgeLocalidade[]> {
    return this.httpClient.get<IbgeLocalidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUf}/municipios?orderBy=nome`);
  }

}
