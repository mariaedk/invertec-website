import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IbgeApiService {

  constructor(private httpClient: HttpClient) { }

  getUfs() {
    return this.httpClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

}
