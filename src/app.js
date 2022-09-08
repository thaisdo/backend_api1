const express = require('express');

const indexRouter = require('./routes/index');
const contatosRouter = require('./routes/contatos');


const app = express();

app.use(express.json()); //vem algo no body da req em json
app.use('/', indexRouter); //incluir o middleware da rota '/'
app.use('/contatos', contatosRouter); //incluir o middleware da rota '/'

module.exports = app;