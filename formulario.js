const db = require('./db')

const Cadastro = db.sequelize.define('cadastro', {
    nome:{
        type: db.Sequelize.TEXT
    },
    sobrenome:{
        type: db.Sequelize.STRING
    },

    nascimento: {
        type: db.Sequelize.INTEGER
    },

    telefone:{
        type: db.Sequelize.INTEGER
    },
    
    cep:{
        type: db.Sequelize.INTEGER
    },

    logradouro:{
        type: db.Sequelize.STRING
    },

    bairro:{
        type: db.Sequelize.STRING
    },

    localidade:{
        type: db.Sequelize.STRING
    },

    UF:{
        type: db.Sequelize.STRING
    },
})
module.exports = Cadastro
//Cadastro.sync({force:true})