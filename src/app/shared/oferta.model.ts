// Classe para instancia de objetos do tipo Oderta
// A principio esse model vai servir para tipar os valores dos arrays da ofertaService

export class OfertaModel {
  id: number;
  categoria: string;
  titulo: string;
  descricaoOferta: string;
  anunciante: string;
  valor: number
  destaque: boolean;
  imagens: Array<object>;
}
