import { Animal } from "./Animal"; // Importa a classe Animal do arquivo Animal.ts

export class Ave extends Animal {
    private envergadura: number; // Declaração de uma propriedade privada para armazenar a envergadura da ave.

    constructor(_envergadura: number, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero); // Chama o construtor da classe Animal, passando o nome, idade e gênero fornecidos.
        this.envergadura = _envergadura; // Inicializa a envergadura da ave com o valor fornecido.
    }

    public getEnvergadura(): number {
        return this.envergadura; // Método público para obter a envergadura da ave.
    }

    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura; // Método público para definir a envergadura da ave.
    }
}
