import { ProdutoTipoEnum } from "../enums/produto-tipoEnum";

export interface ProdutoInterface {
    nome: string;
    tipo: ProdutoTipoEnum;
    preco: number;
    descricao: string;
    estaDisponivel: () => boolean
}