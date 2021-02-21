import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {
  comoUsar = '';
  private route;
  constructor(
      route: ActivatedRoute,
      private ofertasService: OfertasService
  ) {
    this.route = route
  }

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
        .then((descricao: string) => {
          this.comoUsar = descricao
        });
  }

}
