const connection = require('../../database/connection');



module.exports ={
   async index(Resquest, Response){
      const busca = await connection('cursoInicio')
      //.where('excluido', 1)
      .select('*');

      return Response.json(busca);
   },

   async create(Resquest, Response){
      const {tipoCurso, descricao} = Resquest.body;

      const curso = await connection('cursoInicio').where('tipoCurso', tipoCurso).select('id').first();
      
      const excluido = false;
      if(curso != undefined){
          return Response.status(500).json({error: 'O curso já existe'});
      }else{
          await connection('cursoInicio').insert({tipoCurso,descricao, excluido});
          return Response.status(201).json({message: 'sucesso'});
      }
   },

   async delete(Resquest, Response){
      const {tipoCurso} = Resquest.body;

      const validar = await connection('cursoInicio').where('tipoCurso', tipoCurso).select('id').first();

      if(validar){
         await connection('cursoInicio')
         .where('cursoInicio.id', validar.id)
         .update('excluido', true);
         await connection('subCategoria').where('cursoInicioId',validar.id).update('excluido', true)
         return Response.status(201).json({message: 'sucesso'});
      }else{
         return Response.status(400).json({error: 'Bad Resquest'});
      }
   }
};