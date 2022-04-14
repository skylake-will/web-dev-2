import Express from "express";
const app = Express();

// http://localhost/mult?opt1=1&opt2=10

app.get('/mult', function (req, res) {
    var opt1 = req.query.opt1;
    var opt2 = req.query.opt2;
    if (!opt1 || !opt2) return res.status(400).send({ mult: 'Erro ou falta de parametros' })
    var mult = opt1 * opt2
    res.status(200).send({ mult }) // retorna a multiplicação 
    console.log('funcionaou')
});

app.listen(5000, () => {
    console.log("server iniciado")
});