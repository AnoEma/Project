const connection = require('../database/connection');


module.exports ={
     async create(Resquest, Response){
          const {validarCadastro} = Resquest.body;

          const validar = await connection('cadastro')
          .where('validarCadastro', validarCadastro)
          .select('nome')
          .first();

          if(!validar){
            return Response.status(401).json({ error: 'NO found, Token invalido'});
          }
          else{
            await connection('cadastro')
            .where('validarCadastro', validarCadastro)
            .update('ativo', true);

            return Response.json('Sucesso');
          }
     },
}