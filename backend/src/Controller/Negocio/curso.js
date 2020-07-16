const connection = require('../../database/connection');
const { create } = require('../validarSenhaController');

module.exports={
   async index (Resquest, Response){
      const licao = await connection('Curso').select('*');
      return Response.json(licao);
   },

   async create(Resquest, Response){
     const {SubCategoriaId,Material,MaterialTraduizido} = Resquest.body;

     const ids = await connection('SubCategoria').where('Id', SubCategoriaId).select('CursoInicioId').first();

     if(ids){
         await connection('Curso').insert({SubCategoriaId,Material,MaterialTraduizido});
         return Response.status(201).json({message: 'sucesso'});      
     }else{
          return Response.status(400).json({error: 'Bad Resquest'});       
     }
   }
}