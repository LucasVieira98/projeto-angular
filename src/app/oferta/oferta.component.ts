import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OfertasService } from '../ofertas.service';
import {OfertaModel} from '../shared/oferta.model';
import {Observable, Observer, Subscription} from 'rxjs';
import { interval } from 'rxjs';
import {log} from 'util';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {
  private route: ActivatedRoute;
  oferta: OfertaModel;

  // tempoObservableSubscription: Subscription;
  // meuObservableTesteSubscription: Subscription;

  constructor(route: ActivatedRoute,
              private ofertasService: OfertasService
  ) {
    this.route = route
  }

  ngOnInit() {
    console.log('ID recuperado da rota: ', this.route.snapshot.params['id']);
    this.ofertasService.getOfertaPorID(this.route.snapshot.params['id'])
        .then((oferta:any) => {
          this.oferta = oferta.shift();
          console.log(this.oferta);
        })


    // let tempo = interval(2000)
    //
    // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo)
    // })

    //Observable (Observável)
    // let meuObservableTeste = Observable.create((observer: Observer<string>) => {
    // let meuObservableTeste = new Observable((observer: Observer<number>) => {
    //   observer.next(1)
    //   observer.next(3)
    //   observer.complete()
    //   observer.next(3)
    // })
    //Observable (Observador)
    // this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
    //     (resultado: number) => console.log(resultado + 10),
    //     (erro: string) => console.log(erro),
    //     () => console.log('Strem de eventos finalizada')
    // );
  }

  ngOnDestroy() {
    // this.meuObservableTesteSubscription.unsubscribe();
    // this.tempoObservableSubscription.unsubscribe();
  }

}
