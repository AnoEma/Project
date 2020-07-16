const connection = require('../../database/connection');


module.exports ={
   async index(Resquest, Response){
      const busca = await connection('CursoInicio').select('*');

      return Response.json(busca);
   },

   async create(Resquest, Response){
      const {TipoCurso} = Resquest.body;

      const Curso = await connection('CursoInicio').where('TipoCurso', TipoCurso).select('Id').first();
      
      if(Curso){
          return Response.status(500).json({error: 'O curso já existe'});
      }else{
          await connection('CursoInicio').insert({TipoCurso});
          return Response.status(201).json({message: 'ok'});
      }
   }
};