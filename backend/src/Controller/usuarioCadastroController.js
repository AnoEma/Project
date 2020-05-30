const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');


module.exports = {
   async index(Resquest, Response){
      const usuario = await connection('usuarios').select('*');
      return Response.json(usuario);
    },

    async create(Resquest, Response){
       const {nome, sobreNome, cpf, email, 
              celular, cep, cidade, rua, bairro,
              estado, numero, complemento, sexo, usuario} = Resquest.body;

       const saltRounds = 10
       const salt = bcrypt.genSaltSync(saltRounds);
       const senha = bcrypt.hashSync(Resquest.body.senha, salt);
       const ativo = false;
       const admin = false;
       const cpfExiste = await connection('usuarios').where('cpf', cpf).select('nome').first();
       const emailExiste = await connection('usuarios').where('email', email).select('nome').first();
       const celularExiste = await connection('usuarios').where('celular', celular).select('nome').first();
       const usuarioExiste = await connection('usuarios').where('usuario', usuario).select('nome').first();

       if(cpf.length < 11 || cpf.length > 11){
          return Response.status(400).json({ mensagem: 'O CPF invalido'}); 
       }
       else if(cpf == "00000000000" || cpf == " "){
          return Response.status(400).json({ mensagem: 'O CPF invalido'}); 
       }
       else{
          if(emailExiste == null && celularExiste == null && cpfExiste == null && usuarioExiste == null){
             await connection('usuarios').insert({
              nome, sobreNome,cpf,email,celular,
              cep,cidade, rua, bairro, estado,
              numero, complemento, senha, admin, 
              ativo, sexo, usuario
            });
           return Response.status(200).json({ mensagem: 'Cadastro realizado com sucesso'});  
          }
         else{
          return Response.status(401).json({ error: 'Usúario já cadastrado'});              
          } 
        }
    }
};