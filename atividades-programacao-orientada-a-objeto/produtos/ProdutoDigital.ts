import { ProdutoTipoEnum } from "./enums/produto-tipoEnum";
import { ProdutoInterface } from "./interfaces/produtos-interface";

export class ProdutoDigital implements ProdutoInterface {
    public tipo: ProdutoTipoEnum = ProdutoTipoEnum.DIGITAL;

    constructor(public nome: string, public preco: number, public descricao: string){}

    public estaDisponivel(): boolean {
        return true //o estoqque de um produto digital é infinito
    }
}