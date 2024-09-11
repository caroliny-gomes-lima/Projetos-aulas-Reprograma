/*LEMBRETE: quando existe atributos e métodos que sõ apenas visiveis
e acesiveis dentro da propria classe em que foram declarados. 
A única forma de ler ou alterar um atributo encapsulado de fora 
da classe é através de métodos públicos conhecidos como getters (para leitura) 
e setters (para modificação)*/

import { automovel } from "../interface/automovel";

export class Carro {
  public marca: string;
  public modeloNome: string;
  public ano: string;
  private cor: string; //cada carro tem sua cor
  private velocidade: number; //cada tipo de carro possui sua velocidade carro classe A, B e C por exemplo possui velocidades diferentes
  private tanqueDeGasolina: number; //cada cara tem seu tanque de gasolina e gasto de gasolina

  constructor(marca: string, modeloNome: string, ano: string, cor: string, velocidade: number, tanqueDeGasolina: number) {
    this.marca = marca;
    this.modeloNome = modeloNome;
    this.ano = ano;
    this.cor = cor;
    this.velocidade = velocidade;
    this.tanqueDeGasolina = tanqueDeGasolina;
  }

  // Método público para acelerar o carro
  public acelerar(): void {
    if (this.tanqueDeGasolina > 0) {
      this.velocidade += 10;
      this.consumirCombustivel();
      console.log(
        `O carro está acelerando. Velocidade atual: ${this.velocidade} km/h`
      );
    }
  }

  // Método privado para consumir combustível
  private consumirCombustivel(): void {
    this.tanqueDeGasolina -= 1;
    console.log(`Combustível restante: ${this.tanqueDeGasolina} litros`);
  }
  public get Velocidade(): number { // Método público para obter a velocidade atual
    return this.velocidade;
  }
  public get NivelDoTanque(): number { // Método público para verificar o nível do tanque de gasolina
    return this.tanqueDeGasolina;
  }
  public get corDoCarro(): string { // Método público para ver cor do carro
    return this.cor
  }
}

const meuCarro = new Carro("Ford", "Mustang", "2024", "vermelho", 50, 100);
meuCarro.acelerar(); // O carro está acelerando. Velocidade atual: 60 km/h
meuCarro.acelerar(); // O carro está acelerando. Velocidade atual: 70 km/h

console.log(`Velocidade atual: ${meuCarro.Velocidade} km/h`); // Velocidade atual: 80 km/h
console.log(`Nível do tanque: ${meuCarro.NivelDoTanque} litros`); // Nível do tanque: 97 litros

/*
** Atributos Privados: tanqueDeGasolina e velocidade são definidos como private, 
o que significa que só podem ser acessados e modificados dentro da própria classe Carro

** Métodos Públicos: acelerar, getVelocidade, e getNivelDoTanque são métodos públicos 
que permitem interagir com o objeto Carro de maneira controlada

** Método Privado: consumirCombustivel é um método privado, usado internamente pela classe 
Carro para reduzir o nível do combustível sempre que o carro acelera.

*/