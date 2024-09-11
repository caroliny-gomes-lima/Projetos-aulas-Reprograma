import { Animal } from "./classes/animal-classe";
import { Cachorro } from "./classes/cachorro-subClasse";
import { Gato } from "./classes/gato-subClasse";

const meuAnimal = new Animal("Billy", "papagaio");
const meuCachorro = new Cachorro("Billy", "Pastor", "preto", "cachorro", 5);
const meuGato = new Gato("Mel", "Pastvria-lata", "tricolor", "gato", 2);

/*no encapsulamento o atributo ou método privado só podem 
ser ser manipulados atraves do setters.
O set 'corDoGato' está sendo ultilizado 
para permitir que o valor privado cor seja 
alterado externamente de forma controlada*/
meuGato.corDoGato = "vermelho";
console.table(meuAnimal);
console.table(meuCachorro);
console.table(meuGato);
console.log(meuCachorro);

const developer = { frontEnd: "front-end </>", backEnd: "back-end { }" };
console.log(
  `Aspirante a desenvolvedora full stack: ${developer.frontEnd} e ${developer.backEnd}`
);
