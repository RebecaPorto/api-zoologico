import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';
import { Habitat } from './model/Habitat';

const server = express();
const port: number = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    // Criando instâncias de Ave, Reptil e Mamifero
    let ave: Ave = new Ave(10, 'Calopsita', 11, 'Masculino');
    let reptil: Reptil = new Reptil('placóides', 'Cobra', 15, 'Masculino');
    let mamifero: Mamifero = new Mamifero('canguru', 'Julia', 12, 'Feminino');

    // Retornando um JSON com as instâncias criadas
    res.json([ave, reptil, mamifero]);
});

server.post('/ave', (req, res) => {
    // Extraindo dados do corpo da requisição
    const { envergadura, nome, idade, genero } = req.body;
    // Criando uma nova instância de Ave
    let ave: Ave = new Ave(envergadura, nome, idade, genero);
    // Retornando a nova ave em formato JSON
    res.json(["A nova ave do zoologico é:", ave]);
});

server.post('/habitat', (req, res) => {
    // Extraindo dados do corpo da requisição
    const { nome, animais } = req.body;
    // Criando uma nova instância de Habitat
    const habitat = new Habitat(nome, animais);
    console.log(habitat); // Exibindo o habitat no console para fins de depuração
    // Respondendo com uma mensagem de sucesso em formato JSON
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req, res) => {
    // Extraindo dados do corpo da requisição
    const { nome, habitat } = req.body;
    // Criando uma nova instância de Atracao
    const atracao = new Atracao(nome, habitat);
    console.log(atracao); // Exibindo a atração no console para fins de depuração
    // Respondendo com uma mensagem de sucesso em formato JSON
    res.status(200).json('Atração criada');
});

server.post('/zoologico', (req, res) => {
    // Extraindo dados do corpo da requisição
    const { nome, atracao } = req.body;
    // Criando uma nova instância de Zoologico
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo); // Exibindo o zoológico no console para fins de depuração
    // Respondendo com uma mensagem de sucesso em formato JSON
    res.status(200).json('Zoológico criado');
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
