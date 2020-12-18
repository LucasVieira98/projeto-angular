import {OfertaModel} from './shared/oferta.model';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {subscribeToPromise} from 'rxjs/internal-compatibility';

@Injectable()
export class OfertasService {

  // HttpCliente é uma biblioteca
  constructor(private http: HttpClient) {
  }


  public getOfertas(): Promise<Array<OfertaModel>> {
    return new Promise((resolve, reject) => {
      // algum tipo de processamento, que ao finalizar chama a função resolve ou a função reject.
      const deuCerto = true;
      if (deuCerto) {
        // Tranforma em uma requisição assicrona
        resolve(this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta))
        // retornando uma proemessa
      } else {
        reject({codigoErro: 404, mensagemDeErro: 'Servidor não encontrado'});
      }

    });

  }

  getOfertasPorCategoria(categoria: string) : Promise<OfertaModel[]> {
    return (this.http.get('http://localhost:3000/ofertas?categoria='+categoria)
      .toPromise()
      .then((resposta:any) => resposta))
  }


  // public getOfertas(): Promise<OfertaModel[]> {
  //   // Efetuar uma requisição http
  //   return this.http.get('http://localhost:3000/ofertas?destaque=true')
  //       .toPromise()
  //       .then((resposta: any) => resposta)
  //   // retornando uma proemessa
  //   // obtendo um array de ofertas[]
  // }




  // public getIfertas2(): Promise<Array<OfertaModel>> {
  //   return new Promise((resolve, reject) => {
  //     // algum tipo de processamento, que ao finalizar chama a função resolve ou a função reject.
  //     const deuCerto = true;
  //     if (deuCerto) {
  //       // Tranforma em uma requisição assicrona
  //       setTimeout(() => resolve( this.ofertas ), 3000);
  //     } else {
  //       reject({ codigoErro: 404, mensagemDeErro: 'Not found' });
  //     }
  //   })
  //       .then((ofertas: OfertaModel[]) => {
  //         // Fazer algum tipo de tratativa
  //         console.log('Primeiro then');
  //         return ofertas;
  //       })
  //       .then((ofertas: OfertaModel[]) => {
  //         // Fazer outro tipo de tratativa
  //         console.log('Segundo then');
  //         return new Promise((resolve2, reject2) => {
  //           setTimeout(() => { resolve2( ofertas )},3000)
  //         });
  //       })
  //       .then((ofertas: OfertaModel[] ) =>{
  //         console.log('Terceiro then executado após 3 segundos');
  //         return ofertas;
  //       })
  // }
}
