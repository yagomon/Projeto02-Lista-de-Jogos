const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

const jogos = [
    'Mobile Legends: Bang Bang',
    'Need for Speed Underground 2',
    'Perfect World',
    'Warface',
    'Naruto Shippuden: Ultimate Ninja Storm 4.',
    'Street Fighter',
    'Mortal Kombat X',
    'Resident Evil',
    'Super Mario World',
    'Super Mario Bros',
    'Pokemon RedFire',
    'Pokemon LeafGreen'
];

app.get('/',(req,res)=>{
    res.send('Bem vindos a minha lista de jogos.')
});

app.get('/jogos',(req,res)=>{
    res.send(jogos)
});

app.get('/jogos/:id',(req, res) => {
    const id = req.params.id -1;
    const game = jogos[id] ;
    if (!game) {
        res.send('Id Inválido. Jogo Não Encontrado!');
    }
    res.send(game);
    
});

app.get('/jogo-aleatorio', (req, res)=>{
    let jogoRandom = jogos[Math.floor(Math.random()*jogos.length)];
    res.send(jogoRandom);
});


// Creat (Post)
app.post('/jogos', (req,res) => {
    const jogo = req.body.jogo;
    jogos.push(jogo);

    res.send(`O jogo ${jogo} foi adicionado com sucesso!`)
});


// Update (put)
app.put('/jogos/:id', (req,res) => {
    const id = req.params.id -1;
    const jogoAntigo =  jogos[id];
    const jogo = req.body.jogo;
    jogos[id] = jogo;

    res.send(`O jogo ${jogoAntigo} foi atualizado para ${jogo} com sucesso`)
});

//Delete com splice para não ficar o null na lista e fazer os filmes subirem de id
app.delete('/jogos/:id', (req,res)=>{
    const id = req.params.id -1;
    const jogoAexcluir = jogos[id];
    jogos.splice(id,1);
    
    if(!jogoAexcluir) {
        res.send('Id Inválido. Jogo Não Encontrado!');
    }

    res.send(`O jogo ${jogoAexcluir} foi excluído com sucesso.`);
});



app.listen(port,()=>{
    console.info(`O app esta rodando na porta http://localhost:${port}`)
})