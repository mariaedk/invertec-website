import { IbgeApiService } from 'src/app/shared/services/ibge-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  nome = '';
  email = '';
  telefone = '';
  tipoContato = '';
  cidade = '';
  estado = '';

  ufs: any;

  constructor(private ibdgeService: IbgeApiService) {}

  ngOnInit() {

    this.ibdgeService.getUfs().subscribe(
      ufs => {
        this.ufs = ufs;
        console.log(this.ufs)
      }
    );

  }

}
