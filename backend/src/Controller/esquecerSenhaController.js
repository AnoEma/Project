const connection = require('../database/connection');
const bcrypt = require('bcryptjs');


module.exports ={
   async create(Resquest, Response){
     const {email,senha} = Resquest.body;
     const saltRounds = 10
     const salt = bcrypt.genSaltSync(saltRounds);
     const senhaNovo = bcrypt.hashSync(senha, salt);
     
     const emailExiste = await connection('cadastro')
     .where('email', email)
     .select('nome');

     if(!emailExiste){
       return Response.status(401).json({ error: 'No Found: Falha para alterar a senha '}); 
     }
     else{
        if(senhaNovo != null){
         await connection('cadastro').where('email', email).update('senha', senhaNovo);
         return Response.status(200).send({mensagem: 'sucesso'});
        }
        else{
          return Response.status(400).send({mensagem: 'Falha'});
        }             
     }
  }
}