import { Animal } from "./animal-classe";


export class Cachorro extends Animal {
  private raca: string;
  private cor: string;
  private idade: number;

  constructor(nome: string, raca: string, cor: string, tipo: string, idade: number) {
    super(nome, tipo)
    this.raca = raca;
    this.cor = cor;
    this.idade = idade;
  }

  emitirSom(): void {
    console.log("au au au");
  }
}

console.log("Classe filho")