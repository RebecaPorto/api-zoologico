import { Atracao } from "./Atracao"; // Importa a classe Atracao do arquivo Atracao.ts

export class Zoologico {
    private nome: string; // Declaração de uma propriedade privada para armazenar o nome do zoológico.
    private lista_de_atracoes: Array<Atracao>; // Declaração de uma propriedade privada para armazenar uma lista de atrações do zoológico.

    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>) {
        this.nome = _nome; // Inicializa o nome do zoológico com o valor fornecido.
        this.lista_de_atracoes = _lista_de_atracoes; // Inicializa a lista de atrações do zoológico com a lista fornecida.
    }

    public getNome(): string {
        return this.nome; // Método público para obter o nome do zoológico.
    }

    public setNome(nome: string): void {
        this.nome = nome; // Método público para definir o nome do zoológico.
    }

    public getListaDeAtracoes(): Array<Atracao> {
        return this.lista_de_atracoes; // Método público para obter a lista de atrações do zoológico.
    }

    public setListaDeAtracoes(lista_de_atracoes: Array<Atracao>): void {
        this.lista_de_atracoes = lista_de_atracoes; // Método público para definir a lista de atrações do zoológico.
    }
}
