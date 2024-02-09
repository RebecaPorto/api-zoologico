import { Animal } from "./Animal"; // Importa a classe Animal do arquivo Animal.ts

export class Mamifero extends Animal {
    private raca: string; // Declaração de uma propriedade privada para armazenar a raça do mamífero.

    constructor(_raca: string, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero); // Chama o construtor da classe Animal, passando o nome, idade e gênero fornecidos.
        this.raca = _raca; // Inicializa a raça do mamífero com o valor fornecido.
    }

    public getRaca(): string {
        return this.raca; // Método público para obter a raça do mamífero.
    }

    public setRaca(raca: string): void {
        this.raca = raca; // Método público para definir a raça do mamífero.
    }
}
