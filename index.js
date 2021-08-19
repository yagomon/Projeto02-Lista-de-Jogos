const express = require('express');

const app = express();

const port = 3000;

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
    res.send('Bem vindos a minha lista de jogos. Acesse: http://localhost:3000/jogos para ver a lista')
});

app.get('/jogos',(req,res)=>{
    res.send(jogos)
});

app.get('/jogos/:id',(req, res) => {
    const id = req.params.id;
    const game = jogos[id] ;
    if (id > jogos.length -1 || id < 0){
        res.send('Id inválido! Tente Novamente');
    } else{
        res.send(game)
    }
    
});

app.get('/jogo-aleatorio', (req, res)=>{
    let jogoRandom = jogos[Math.floor(Math.random()*jogos.length)];
    res.send(jogoRandom);
})


app.listen(port,()=>{
    console.info(`O app esta rodando na porta http://localhost:${port}`)
})