const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', { error: null });
});


app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data_agendamento } = req.body;
    
    if (!nome || !endereco || !telefone || !data_agendamento) {
        res.render('index', { error: 'Todos os campos devem ser preenchidos!' });
    } else {
        res.render('dados', { nome, endereco, telefone, data_agendamento });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
