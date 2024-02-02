import { Animal } from "./Animal";

export class Habitat extends Animal {
    private lista_de_animais: string;

    constructor(_lista_de_animais: string, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero);
        this.lista_de_animais = _lista_de_animais;
    }

    public getListaDeAnimais(): string {
        return this.lista_de_animais;
    }

    public setListaDeAnimais(lista_de_animais: string): void {
        this.lista_de_animais = lista_de_animais;
    }
}