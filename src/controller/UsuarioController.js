const Usuario = require('../model/Usuario');

module.exports = {


    async index(req,res){ //aguarda algo antes de ser executado

        //antes de dar alguma response, primeiro garantir que irá 
        //verificar se há o dito usuário
        const usuarios = await Usuario.find() //equiv no SQL a select * from usuario
        res.json(usuarios)
    },
    //Create
    async store(req,res){ 

        const {nome, senha} = req.body;

        let dataCreate = {}

        dataCreate = { nome, senha 
        }

        const usuarios = await Usuario.create(dataCreate) 
        res.json(usuarios)
    },
    //Find One by id
    async detail(req,res){

        const {_id} = req.params

        const usuarios = await Usuario.findOne({_id}); // select * from where id  = alguma-coisa 
        res.json(usuarios)
    },
    //Delete usando a ID como parametro para remover o usuário
    async delete(req,res){

        const {_id} = req.params

        const usuarios = await Usuario.findByIdAndDelete({_id}); // select * from where id  = alguma-coisa 
        res.json(usuarios)
    },


    //Alteração/Atualização de Dados
    async update(req,res){ 

        const {_id, nome, senha} = req.body;

        let dataCreate = {}

        dataCreate = { nome, senha 
        }

        const usuarios = await Usuario.findByIdAndUpdate({_id}, dataCreate, {new: true}) 
        res.json(usuarios)
    },

}