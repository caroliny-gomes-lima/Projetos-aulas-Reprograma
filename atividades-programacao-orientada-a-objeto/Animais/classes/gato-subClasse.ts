import { Animal } from "./animal-classe";

/*Neste arquivo, as propriedades raca, cor e idade 
estão encapsuladas utilizando o modificador de acesso private. 
Isso significa que elas só podem ser acessadas diretamente de 
dentro da classe Gato. */
export class Gato extends Animal { //"extends" é a palavra-chave usada para herdar da classe "Animal"
  private raca: string; //encapsulamento
  private cor: string; //encapsulamento
  private idade: number; //encapsulamento

  constructor(
    nome: string,
    raca: string,
    cor: string,
    tipo: string,
    idade: number
  ) {
    super(nome, tipo);// O "super()" é chamado  para invocar o construtor da classe base e inicializar nas propriedades 
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;
  }

  emitirSom(): void {
    console.log("miau miau miau");
  }

  /*A propriedade cor possui um método set para permitir que seu valor seja 
  alterado externamente de forma controlada */
  set corDoGato(cor: string) {
    this.cor = cor;
  }
}
