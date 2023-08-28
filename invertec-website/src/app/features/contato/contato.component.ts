import { IbgeApiService } from 'src/app/shared/services/ibge-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IbgeUf } from 'src/app/shared/models/IbgeUF';
import { MatSelectChange } from '@angular/material/select';
import { IbgeLocalidade } from 'src/app/shared/models/IbgeLocalidade';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  
  disableCidade = true;

  formContato = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    tipoContato: new FormControl(''),
    estado: new FormControl(),
    cidade: new FormControl({value: '', disabled: this.disableCidade})
  })


  ufs: IbgeUf[] = [];
  municipios: IbgeLocalidade[] = [];

  constructor(private ibdgeService: IbgeApiService) {}

  ngOnInit() {
    this.ibdgeService.getUfs().subscribe(
      ufs => {       
        this.ufs = ufs;
      }
    );

  }

  selecionarCidade($event: any) {
    if ($event.value != 0) {
      this.formContato.get('cidade')?.enable();
      this.buscarCidades();
    } else {
      this.formContato.get('cidade')?.disable();
    }
  }

  buscarCidades() {
    console.log(this.formContato.get('estado')?.value)
    this.ibdgeService.getMunicipiosByUf(this.formContato.get('estado')?.value).subscribe(
      municipios => {       
        this.municipios = municipios;
      }
    );
  }

}
