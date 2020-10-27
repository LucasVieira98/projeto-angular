import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import {OfertaModel} from '../shared/oferta.model';
import {log} from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {
  ofertas: OfertaModel[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // Trabalhando com os dados por uma simples estanciação...
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas);

    // Trabalhando com promises utilizando a função derivada then
    this.ofertasService.getOfertas()
      .then(
        (ofertas: OfertaModel[] ) => {
          this.ofertas = ofertas;
        }
      )
      .catch((param: any) => {
        console.log(param);
      })
  }
}
