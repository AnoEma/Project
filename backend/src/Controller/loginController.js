const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "xuxa";


module.exports = {

  async create (resquest, response){    
          const {email, senha} = resquest.body;
          
          if(email.length < 10){
            return response.status(401).send({mensagem: 'Falha de login verifica o E-mail e a Senha'});
          }

       const login = await connection('cadastro')
        .where('email', email)
        .select('nome')
        .first();
          if(!login){
           return response.status(401).send({mensagem: 'Falha de login verifica o E-mail e a Senha '}); 
          }
        
           const hash = await connection('cadastro').where('email', email).select('senha').first();
           const usuarioAtivo = await connection('cadastro').where('email', email).select('ativo').first();

        bcrypt.compare(senha, hash.senha, (err, results)=>{
          if(err){
            return response.status(401).send({mensagem: 'Falha de login verifica o E-mail e a Senha'});
          }
          else if(!results){
            return response.status(401).send({mensagem: 'Falha de login verifica o E-mail e a Senha'});
          }
          else{           
                if(usuarioAtivo.ativo != true){
                  return response.status(400)
                  .send({mensagem: 'Usuario inativo; É necessario verificar a validação no E-mail'});
                }
              else{
                const token = jwt.sign({email: this.email},secret,
                {
                expiresIn: 86400     
                });

                return response.status(200).send({
                  mensagem: 'Autenticado com sucesso',
                  token: token
                });
              }
          }
        })
    }
}
