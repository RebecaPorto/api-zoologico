import { Habitat } from "./Habitat"; // Importa a classe Habitat do arquivo Habitat.ts

export class Atracao {
    private nome: string; // Declaração de uma propriedade privada para armazenar o nome da atração.
    private habitats: Array<Habitat>; // Declaração de uma propriedade privada para armazenar uma lista de habitats da atração.

    constructor(_nome: string, _habitats: Array<Habitat>) {
        this.nome = _nome; // Inicializa o nome da atração com o valor fornecido.
        this.habitats = _habitats; // Inicializa a lista de habitats da atração com a lista fornecida.
    }

    public getNome(): string {
        return this.nome; // Método público para obter o nome da atração.
    }

    public setNome(nome: string): void {
        this.nome = nome; // Método público para definir o nome da atração.
    }

    public getHabitats(): Array<Habitat> {
        return this.habitats; // Método público para obter a lista de habitats da atração.
    }

    public setHabitats(habitats: Array<Habitat>): void {
        this.habitats = habitats; // Método público para definir a lista de habitats da atração.
    }
}
