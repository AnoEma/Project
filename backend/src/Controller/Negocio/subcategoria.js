const connection = require('../../database/connection');

module.exports={
   async index (Resquest, Response){
      const busca = await connection('SubCategoria').select('*');

      return Response.json(busca);
   },

   async create(Resquest, Response){
      const {CursoInicioId, Descricao} = Resquest.body;
      const descricao = await connection('SubCategoria').where('Descricao', Descricao).select('Id').first();

      const isCursoInicioId = await connection('CursoInicio').where('Id', CursoInicioId).select('TipoCurso').first();

      if(descricao != undefined){
         return Response.status(500).json({error: 'A descricao já existe'});
      }else{
         if(isCursoInicioId != undefined){
            await connection('SubCategoria').insert({Descricao, CursoInicioId});
         }else{
            return Response.status(500).json({error: 'Bad Resquest'});
         }
      }
   }
}