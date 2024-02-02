import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) =>{
  let ave: Ave = new Ave(10,'Papagaio',30, 'Masculino');
let reptil: Reptil = new Reptil('ganoides','lagarto',30, 'Masculino')
let mamifero: Mamifero = new Mamifero('pug','mel',10,'femea')
    res.json([ave,reptil,mamifero]);
})

server.post('/ave', (req, res) =>{
  const {nome, idade, genero, envergadura} = req.body;
  let ave: Ave = new Ave(nome, idade, genero, envergadura);
  res.json(["A nova ave do zoologico é:",ave]);
});
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})