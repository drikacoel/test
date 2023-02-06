const express = require('express')
const app = express()
const{engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const Cadastro = require('./models/Formulario')


//template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//rotas
app.get("/", function(req, res){
    Cadastro.findAll(). then(function(cadastrados){
        res.render('home', {cadastrados: cadastrados})

    })
    res.render('home')

})

app.get("/formulario", function(req, res){
    res.render('formulario')
})

app.post("/add", function(req, res){
    Cadastro.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('houve um erro ' +erro)
    })

})
app.listen(3000, function(){
    console.log('servidor rodando')
})