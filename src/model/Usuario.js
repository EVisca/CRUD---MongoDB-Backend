const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({

//uso do Schema do mongoose pra criar a tabela
//e a tribuir os campos
    nome: String,
    senha: String
})

const usuario = mongoose.model('Usuario', DataSchema)
module.exports = usuario;

//ainda é necessário fazer os controles e então as requisições 
//para que seja criada na DB do Mongo