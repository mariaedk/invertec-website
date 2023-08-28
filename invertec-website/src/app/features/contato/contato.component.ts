import { IbgeApiService } from 'src/app/shared/services/ibge-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formContato = this.formBuilder.group({
    nome: '',
    email: '',
    telefone: '',
    tipoContato: '',
    cidade: '',
    estado: '',
  });

  ufs = [];

  constructor(private ibdgeService: IbgeApiService, private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.ibdgeService.getUfs().subscribe(
      ufs => {       
          
        // this.ufs = ufs;
        console.log(this.ufs)
      }
    );

  }

}
