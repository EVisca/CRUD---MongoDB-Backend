const express = require('express');
const UsuarioController = require('./controller/UsuarioController');

const routes = express.Router();

//definição das routes

routes.get('/',function(req, res){ //request and response

    res.json({message: "Welcome to your MongoDB Backend"})
    //teste no Postman usando "localhost:3003" para GET: retornada a mensagem conforme o esperado
    /*

    {
        "message": "Welcome to your MongoDB Backend"
    }

    */
})
    // nome da route   o nome do que vai executar
routes.get('/usuario', UsuarioController.index)
//como nenhum usuário ainda tinha sido cadastrado, o response do get foi um array vazio e com status 200

//route p/ create
routes.post('/usuario',UsuarioController.store) //localhost:3003/usuario

//route p/ Find by One id
routes.get('/usuario/:_id', UsuarioController.detail) //localhost:3003/usuario/6285c8f45fe1cf5ea15ead2b

//route p/ Delete By ID
routes.delete('/usuario/:_id', UsuarioController.delete) //localhost:3003/usuario
//usar o route do create para criar um novo ou mais usuários e testar o delete à vontade

//route p/Update
routes.put('/usuario', UsuarioController.update)



//export do routes.js
module.exports = routes;