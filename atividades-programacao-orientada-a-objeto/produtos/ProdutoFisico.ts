import { ProdutoTipoEnum } from "./enums/produto-tipoEnum";
import { ProdutoInterface } from "./interfaces/produtos-interface";


export class ProdutoFisico implements ProdutoInterface {
  protected estoque: number = 0;
  public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO;
  constructor(
    public nome: string,
    public preco: number,
    protected _descricao: string
  ) {}
  public estaDisponivel(): boolean {
    return this.estoque > 0;
  }
  public get descricao(): string {
    return this._descricao;
  }
}
