const connection = require('../database/connection');


module.exports ={
    async create(Resquest, Response){
      const{usuario} = Resquest.body;

      const usuarioLogado = await connection('usuarios')
      .where('usuario', usuario)
      .select('admin')
      .first();

      if(usuarioLogado.admin == true){
         await connection('usuarios')
           .where('usuario', usuario)
           .update('admin', true);

        return Response.json('Sucesso');       
      }
      else{
          return Response.status(400).json({ error: 'Somemnte o Adminstrador que pode liberar acesso Admin'});      
      }
    }
}