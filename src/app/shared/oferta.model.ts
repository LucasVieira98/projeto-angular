// Classe para instancia de objetos do tipo Oderta
// A principio esse model vai servir para tipar os valores dos arrays da ofertaService

export class OfertaModel {
  public id: number;
  public categoria: string;
  public titulo: string;
  public descricao_oferta: string;
  public anunciante:  string;
  public valor: number;
  public destaque: boolean;
//    public imagens: Array<object>;
  public imagens: {
    url: Array<object>;
  }

}
