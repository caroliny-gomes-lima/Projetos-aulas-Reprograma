interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    exibirInformacoes():string
}

class Automovel implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInformacoes(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo} Ano: ${this.ano}`
    }
}

const newCarro = new Automovel("Ford", "Mustang", 2024)
console.log(newCarro.exibirInformacoes())