const connection = require('../../database/connection');

module.exports={
   async index (Resquest, Response){
      const busca = await connection('SubCategoria').select('*');

      return Response.json(busca);
   }
}