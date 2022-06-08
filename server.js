const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose= require('mongoose')

const routes = require('./src/routes')

// Iniciar o Express

const app = express()

//inicio conexão com o banco de dados
                    //1º - caminho do banco de dados
mongoose.connect('mongodb://localhost:27017/MongoDB-Node-CRUD', {

/*
OBS: useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer 
supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, 
and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.

Versão do Mongoose listada no package.json: "mongoose": "^6.3.2",
*/
    // 2º - configuração padrão
   // useUnifiedTopology: true,
   // useNewUrlParser: true,
  //  useFindAndModify: false
    //3º - tratamento de erros
}, function(err){

    if(err){

        console.log(err)
    }else{
            console.log("MongoDB connected sucessfully")
            //após remover os itens listados no 2º parametro de configs, houve ambas
            //mensagens de sucesso do servidor do node e da conexão do MongoDB
        }
    })

//instalar o mongoose para a comunicação do Back com a Database: npm install mongoose

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3003, function(){

    console.log("Servidor Inicializado com Sucesso")

})

// express, cookie-parser, cors and path installed npm