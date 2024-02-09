import { Animal } from "./Animal";

export class Habitat {
    private nome: string; // Declaração de uma propriedade privada para armazenar o nome do habitat.
    private listaAnimais: Array<Animal>; // Declaração de uma propriedade privada para armazenar uma lista de animais do habitat.

    constructor(_nome: string, _listaAnimais: Array<Animal>) {
        this.nome = _nome; // Inicializa o nome do habitat com o valor fornecido.
        this.listaAnimais = _listaAnimais; // Inicializa a lista de animais do habitat com a lista fornecida.
    }

    /**
     * Retorna o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome; // Método público para obter o nome do habitat.
    }

    /**
     * Define o nome do habitat.
     * 
     * @param _nome O nome a ser atribuído ao habitat.
     */
    public setNome(_nome: string): void {
        this.nome = _nome; // Método público para definir o nome do habitat.
    }

    /**
     * Retorna a lista de animais do habitat.
     * 
     * @returns A lista de animais do habitat.
     */
    public getListaAnimais(): Array<Animal> {
        return this.listaAnimais; // Método público para obter a lista de animais do habitat.
    }

    /**
     * Define a lista de animais do habitat.
     * 
     * @param _listaAnimais A lista de animais a ser atribuída ao habitat.
     */
    public setListaAnimais(_listaAnimais: Array<Animal>): void {
        this.listaAnimais = _listaAnimais; // Método público para definir a lista de animais do habitat.
    }
}
