import { ProdutoInterface } from "./interfaces/produtos-interface";
import { ProdutoDigital } from "./ProdutoDigital";
import { ProdutoFisico } from "./ProdutoFisico";
import { VariantesDoProduto } from "./variantesProduto";


const produtoDigial = new ProdutoDigital("FINAL FANTASY VIII", 299.99, "A Saga Continua")
const produtoFisico = new ProdutoFisico("Regata", 100.00, "com encapsulamento")
const subRegataRosa = new VariantesDoProduto('Regata', 110, 'modelo privavera-verao', 'rosa')
const subRegataPreta = new VariantesDoProduto('Regata', 110, 'modelo rock', 'preta')

const display = (...produtos: ProdutoInterface[]): void => {
    const carrinhoProdutos = produtos.map((produto)=> {
        return {
            nome: produto.nome,
            preco: produto.preco,
            descricao: produto.descricao,
            estaDisponivel: produto.estaDisponivel()
        }
    })
    console.table(carrinhoProdutos)
}

display(produtoDigial, produtoFisico, subRegataRosa, subRegataPreta)