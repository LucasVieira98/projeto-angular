import {OfertaModel} from './shared/oferta.model';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {subscribeToPromise} from 'rxjs/internal-compatibility';

@Injectable()
export class DiversaoService {

    // HttpCliente é uma biblioteca
    constructor(private http: HttpClient) {
    }


    public getDiversao(): Promise<Array<OfertaModel>> {
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

    getDiversaoPorCategoria(categoria: string) : Promise<OfertaModel[]> {
        return (this.http.get('http://localhost:3000/ofertas?categoria='+categoria)
            .toPromise()
            .then((resposta:any) => resposta))
    }
}
