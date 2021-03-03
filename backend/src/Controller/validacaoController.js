const connection = require('../database/connection');


module.exports ={
     async create(Resquest, Response){
          const {validarCadastro} = Resquest.body;
          console.log(validarCadastro);

          const validar = await connection('cadastro')
          .where('validarCadastro', validarCadastro)
          .select('nome');
          console.log(validar);

          if(!validar){
            return Response.status(400).json({ error: 'NO found, Token invalido'});
          }
          else{
            await connection('cadastro')
            .where('validarCadastro', validarCadastro)
            .update('ativo', true);

            return Response.status(200).json('Sucesso');
          }
     },
}