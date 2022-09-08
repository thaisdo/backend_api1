const express = require('express');
const { restart } = require('nodemon');

const router = express.Router(); // router = middleware do express

const contatos = [
    {
        id: 1,
        nome: "thainara",
        fone: "1234-5678"
    },
    {
        id: 2,
        nome: "amanda",
        fone: "8765-4321"
    }
];

router.get('/', function(req, res, next) {
    res.json(contatos);
});

router.get('/id', function(req, res, next) {
    const contatoLocalizado = contatos.find(contato => 
        contato.id === Number(req.params.id)
        );
        if(!contatoLocalizado) {
            return res.status(404).json({msg: "Não encontrei contato!"})
        }
    res.json(contatoLocalizado);
});

router.post('/', function(req, res, next) {
    const novoContato = {
        id: contatos.lenght + 1,
        nome: req.body.nome,
        fone: req.body.fone
    };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
});

router.put('/:id', function(req, res, next) {
    const contatoLocalizado = contatos.find(contato => 
        contato.id === Number(req.params.id)
        );
        if(!contatoLocalizado) {
            return res.status(404).json({msg: "Não encontrei contato!"})
        }
        contatoLocalizado.nome = req.body.nome;
        contatoLocalizado.fone = req.body.fone;
    res.status(204).end();
});

module.exports = router;
