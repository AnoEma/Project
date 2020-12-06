const connection = require('../../database/connection');

module.exports={
   async index (Resquest, Response){
      const busca = await connection('subCategoria').select('*');

      return Response.json(busca);
   },

   async listaSubcategoria(Resquest, Response){
      const {cursoId} = Resquest.params;
      const buscaSubcategoria = await connection('subCategoria')
      .where('cursoInicioId', cursoId).select('*');
      
      return Response.json(buscaSubcategoria);
   },

   async create(Resquest, Response){
      const {cursoInicioId, descricao, descricaoMaterial} = Resquest.body;

      const validar = await connection('subCategoria').where('descricao', descricao).select('id').first();
      
      const isCursoInicioId = await connection('cursoInicio').where('id', cursoInicioId).select('tipoCurso').first();
      const excluido = false;

      if(validar != undefined){
         return Response.status(500).json({error: 'A descricao já existe'});
      }else{
         if(isCursoInicioId != undefined){
            await connection('subCategoria').insert({descricao, cursoInicioId, excluido, descricaoMaterial});
            return Response.status(201).json({message: 'sucesso'});
         }else{
            return Response.status(500).json({error: 'Bad Resquest'});
         }
      }
   },

   async delete(Resquest, Response){
      const {descricao} = Resquest.body;
      const validar = await connection('subCategoria').where('descricao', descricao).select('cursoInicioId').first();

      if(validar){
         await connection('subCategoria').where('cursoInicioId', validar.cursoInicioId).update('excluido', true);
         return Response.status(201).json({massege: 'sucesso'});
      }else{
         return Response.status(400).json({error: 'Bad Resquest'});
      }
   }
}