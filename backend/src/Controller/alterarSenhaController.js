const connection = require('../database/connection');
const bcrypt = require('bcryptjs');


module.exports ={
    async create(Resquest, Response){

     const saltRounds = 10
     const salt = bcrypt.genSaltSync(saltRounds);
     const {email,senha} = Resquest.body;
     const hash = await connection('cadastro').where('email', email).select('senha').first();
     const novoSenha = bcrypt.hashSync(Resquest.body.senha, salt);  

     if(email != null){
      await bcrypt.compare(senha, hash.senha, (err, results)=>{
      if(err){
        return Response.status(401).send({mensagem: 'Falha na autenticação 23'});
        }
      else if(results){
        return Response.status(401).send({mensagem: 'A senha não pode ser a mesma que a senha atual'});
        }
      else{
        return novoSenha;
       }
     });

      if(novoSenha != null){
          await connection('cadastro')
            .where('email', email)
            .update('senha', novoSenha);
          return Response.status(200).json('Sucesso: Ano, voce conseguiu');
        }
      else{
          return Response.status(401).send({mensagem: 'Falha tenta novamente'});
        }
    }
  }
 };