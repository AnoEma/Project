const connection = require('../../../database/connection');

module.exports={
  async index(Resquest, Response){
      const poema = await connection('poema')
      .select('*');
      return Response.json(poema);
  },

  async getPoema(Resquest, Response){
     const {poemaId} = Resquest.params;
     const poemaById = await connection('poema')
     .where('id', poemaId).select('*');
     return Response.json(poemaById);
  },

  async create(Resquest, Response){
     const {poemaId,poemaMaterial,poemaMaterialTraduizido,descricao} = Resquest.body;

     const ids = await connection('subCategoria').where('cursoInicioId', poemaId).select('id').first();
     const validar = await connection('poema').where('poemaMaterial', poemaMaterial).select('id').first();
     const excluido = false;

     if(ids){
        if(validar == undefined){
          await connection('poema').insert({poemaId, poemaMaterial, poemaMaterialTraduizido, descricao, excluido});
          return Response.status(201).json({message: 'Poema cadastrado com sucesso'});
        }
        else{
         return Response.status(404).json({error: 'Poema já existe'});        
        }
     }
     else{
       return Response.status(400).json({error: 'Bad Resquest'});           
     }
  },

  async delete(Resquest, Response){
    const {material} = Resquest.body;
    const validar = await connection('poema').where('poemaMaterial', material)
    .select('id').first();

    if(validar){
      await connection('poema').where('id', validar.id).update('excluido', false);
      return Response.status(201).json({message: 'sucesso'});
    }else{
      return Response.status(400).json({error: 'Bad Resquest'});      
    }
  }
}