//FAZER A PRIMAIRA ATIVIDADE AQUI

import { MaterialLeitura } from "./MaterialLeituraInterface";


class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPaginas: number;

    constructor(titulo: string, autor: string, numeroPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    exibirDetalhes(): void {
        console.log(`Livro ${this.titulo}! 
        - Autor: ${this.autor}, 
        - numero de páginas: ${this.numeroPaginas} páginas`)
    }
}
const ProdLivro = new Livro("Senhor dos Dinossauros", "J. J. Miller", 24);
console.log(ProdLivro.exibirDetalhes());

class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
    exibirDetalhes(): void {
        console.log(`Revista ${this.titulo}! 
        - Autor: ${this.autor}, 
        - edicao: ${this.edicao}`)
    }
}
const ProdRevista = new Revista("Playstation", "IGN", 24);
console.log(ProdRevista.exibirDetalhes());

class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }
    exibirDetalhes(): void {
        console.log(`Artigo ${this.titulo}! 
        - Autor: ${this.autor}, 
        - Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}`)
    }
}
const PublicArtigo = new Artigo("John Doe", "Inteligencia Artificial", new Date(2021,11,1));
console.log(PublicArtigo.exibirDetalhes());



