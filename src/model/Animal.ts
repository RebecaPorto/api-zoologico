export class Animal {
    private nome: string; // Declaração de uma propriedade privada para armazenar o nome do animal.
    private idade: number; // Declaração de uma propriedade privada para armazenar a idade do animal.
    private genero: string; // Declaração de uma propriedade privada para armazenar o gênero do animal.

    constructor(_nome: string, _idade: number, _genero: string) {
        this.nome = _nome; // Inicializa o nome do animal com o valor fornecido.
        this.idade = _idade; // Inicializa a idade do animal com o valor fornecido.
        this.genero = _genero; // Inicializa o gênero do animal com o valor fornecido.
    }

    public getNome(): string {
        return this.nome; // Método público para obter o nome do animal.
    }

    public setNome(nome: string): void {
        this.nome = nome; // Método público para definir o nome do animal.
    }

    public getIdade(): number {
        return this.idade; // Método público para obter a idade do animal.
    }

    public setIdade(idade: number): void {
        this.idade = idade; // Método público para definir a idade do animal.
    }

    public getGenero(): string {
        return this.genero; // Método público para obter o gênero do animal.
    }

    public setGenero(genero: string): void {
        this.genero = genero; // Método público para definir o gênero do animal.
    }
}

