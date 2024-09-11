import { ProdutoFisico } from "./ProdutoFisico";


export class VariantesDoProduto extends ProdutoFisico {
    public imagens: string[] = [];
    public categorias: string[] = ['regata']
    dimensoes: any = {};

    constructor(public nome: string, public preco: number, protected _descricao: string, public cor: string){
        super(nome, preco, _descricao)
    }
    get ddescricao(): string{
        return  `
        O produto : ${this.nome},  com a cor ${this.cor} 
        com os tamnhos x, y,z 
        categorias ${this.categorias.join(', ')}
        ${this._descricao}`
    }
}
