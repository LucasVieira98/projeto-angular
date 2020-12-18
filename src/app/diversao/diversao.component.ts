import { Component, OnInit } from '@angular/core';

import { OfertaModel } from '../shared/oferta.model';
import {DiversaoService} from '../diversao.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [DiversaoService]
})
export class DiversaoComponent implements OnInit {

  diversoes: OfertaModel[]

  constructor(private diversaoService: DiversaoService) { }

  ngOnInit() {
    this.diversaoService.getDiversaoPorCategoria('diversao')
        .then((diversao: OfertaModel[]) => {
          this.diversoes = diversao;
          console.log(this.diversoes);
        })
  }

}
