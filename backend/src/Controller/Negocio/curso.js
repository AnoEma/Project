const connection = require('../../database/connection');

module.exports={
   async index (Resquest, Response){
      const licao = await connection('curso')
      .select('*');
      return Response.json(licao);
   },

   async create(Resquest, Response){
     const {subCategoriaId,material,materialTraduizido} = Resquest.body;

     const ids = await connection('subCategoria').where('id', subCategoriaId).select('cursoInicioId').first();
     const validar = await connection('curso').where('material', material).select('id').first();
     const excluido = false;
     
     if(ids){
        if(validar == undefined){
         await connection('curso').insert({subCategoriaId,material,materialTraduizido,excluido});
         return Response.status(201).json({message: 'sucesso'});
        }else{
         return Response.status(404).json({error: 'Material já existe'});   
        }      
     }else{
          return Response.status(400).json({error: 'Bad Resquest'});       
     }
   },

   async delete(Resquest, Response){
      const {material} = Resquest.body;

      const validar = await connection('curso').where('material', material).select('subCategoriaId').first();
      if(validar){
         await connection('curso').where('subCategoriaId', validar.subCategoriaId).update('excluido', true);
         return Response.status(201).json({message: 'sucesso'});
      }else{
         return Response.status(400).json({error: 'Bad Resquest'});
      }
   }
}