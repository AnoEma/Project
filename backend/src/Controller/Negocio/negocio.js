const connection = require('../../database/connection');


module.exports={
    async index(Resquest, Response){
       const tempo = await connection('tempoVerbo').select('*');
       return Response.json(tempo);
    },

    async createVerbo(Resquest, Response){
        const {subCategoriaId, tempo, tempoTraduizido} = Resquest.body;
        
        const ids = await connection('subCategoria').where('id', subCategoriaId).select('cursoInicioId').first();
        const validar = await connection('tempoVerbo').where('tempo', tempo).select('id').first();
        const excluido = false;

        if(ids){
            if(validar == undefined){
                await connection('tempoVerbo')
                .insert({subCategoriaId,tempo,tempoTraduizido, excluido});
                return Response.status(201).json({message: 'sucesso'});
            }
            else{
                return Response.status(404).json({errpr: 'O tempo do verbo já existe!'})
            }
        }
        else{
            return Response.status(400).json({error: 'Tem problema com o Id da Subcategoria!'})
        }
    }
}