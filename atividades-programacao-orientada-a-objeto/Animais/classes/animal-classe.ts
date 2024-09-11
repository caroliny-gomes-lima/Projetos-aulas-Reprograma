
export class Animal {
  public nome: string;
  public tipo: string;

  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }

  emitirSom(): void {}
}

console.log("Classe mãe")