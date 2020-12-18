import { Component, OnInit } from '@angular/core';
// Modelo de dados
import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

    ofertas: OfertaModel[];

  constructor(private ofertasServive: OfertasService) { }

  ngOnInit() {
    this.ofertasServive.getOfertasPorCategoria('restaurante')
        .then((ofertas: any) => {
          this.ofertas = ofertas;
          console.log(this.ofertas);
        })
  }

}
