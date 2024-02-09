import { Animal } from "./Animal"; // Importa a classe Animal do arquivo Animal.ts

export class Reptil extends Animal {
    private tipo_de_escamas: string; // Declaração de uma propriedade privada para armazenar o tipo de escamas do réptil.

    constructor(_tipo_de_escamas: string, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero); // Chama o construtor da classe Animal, passando o nome, idade e gênero fornecidos.
        this.tipo_de_escamas = _tipo_de_escamas; // Inicializa o tipo de escamas do réptil com o valor fornecido.
    }

    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas; // Método público para obter o tipo de escamas do réptil.
    }

    public setTipoDeEscamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas; // Método público para definir o tipo de escamas do réptil.
    }
}
