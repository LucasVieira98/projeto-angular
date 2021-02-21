import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Observable, Subject} from 'rxjs';
import {OfertaModel} from '../shared/oferta.model';
import {log} from 'util';
import { of } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  ofertas: Observable<OfertaModel[]>;
  subjectPesquisa: Subject<string> = new Subject<string>();
  ofertas2: any
  constructor(
      private ofertasService: OfertasService
  ) {

  }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
        debounceTime(1000), // executa a ação depois do tempo passado
        distinctUntilChanged(),
        switchMap((termo: string) => {
      console.log('Requisição http para api');
      if(termo.trim() === '') {
        return of<OfertaModel[]>([]);
      }
      return this.ofertasService.pesquisaOfertas(termo)
    }),
    catchError ((erro)=> {
      console.log(erro)
      return of([])
    })
    ) //retorno Ofertas
    this.ofertas.subscribe((ofertas: OfertaModel[]) => {
      console.log(ofertas);
      this.ofertas2 = [ofertas];
    })
  }

  pesquisa(termoDaBusca): void {
    console.log('Keyip caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca)
    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);
    // this.ofertas.subscribe(
    //     (ofertas:OfertaModel[]) => console.log(ofertas),
    //     (erro: any) => console.log('Erro status', erro.status),
    //     () => console.log('Fluxo de eventos completo!')
    // )
  }

  limpaPesquisa() {
    this.subjectPesquisa.next('')
  }

}
