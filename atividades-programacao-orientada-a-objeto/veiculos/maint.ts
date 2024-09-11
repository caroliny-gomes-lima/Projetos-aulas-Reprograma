import { Carro } from "./classe/carro";
import { automovel } from "./interface/automovel";

const meuCarro = new Carro("Ford", "Mustang", "2024", "vermelho", 50, 100);

const display = (...automovel: automovel[]):void => {
    const automoveis = automovel.map((item)=>{
        return {
            marca: item.marca,
            modeloNome: item.modeloNome,
            ano: item.ano,
        }
    })
    console.table(automoveis)
}

display(meuCarro)

//está sendo exibido por causa do metodo getter que é publico
console.log(meuCarro.corDoCarro)