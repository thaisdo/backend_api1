//porta para subir o app
const app = require('../src/app');

const porta = 3000;

app.listen(porta, function(){
    // console.log('api tá on na',{porta});
    console.log(`api tá on na ${porta}!`);
});
//teste
