const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "xuxa";


module.exports = {

  async getUsuario(Resquest, Response){
    const {usuario} = Request.body;
    const retorno = await connection('usuarios').where('email', usuario).select('admin');
    return Response.json(retorno);
  },
  async create (resquest, response){    
     const {usuario, senha} = resquest.body;
                  
      if(usuario.length < 5){
          return response.status(401).send({mensagem: 'Falha na autenticação 1'});
        }
        
      const login = await connection('usuarios')
          .where('usuario', usuario)
          .select('nome')
          .first();
      if(!login){
         return response.status(401).send({mensagem: 'Falha'}); 
        }
                
      const hash = await connection('usuarios').where('usuario', usuario).select('senha').first();
      const usuarioAtivo = await connection('usuarios').where('usuario', usuario).select('ativo').first();
        
      bcrypt.compare(senha, hash.senha, (err, results)=>{
        if(err){
          return response.status(401).send({mensagem: 'Falha na autenticação 23'});
          }
        else if(!results){
          return response.status(401).send({mensagem: 'Falha na autenticação 50'});
          }
        else{           
          if(usuarioAtivo.ativo != true){
           return response.status(400)
           .send({mensagem: 'Usuario inativo ☺'});
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