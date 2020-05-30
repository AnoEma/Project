const connection = require('../database/connection');


module.exports ={
    async create(Resquest,Response){
    const {nome,quantidade} = Resquest.body;
 

    const facaPedido = await connection('pedidos')
    .where('nome', nome)
    .select('preco')
    .first();

    const value = quantidade * facaPedido;
    
    if(facaPedido != null){
     return Response.status(400).json({ mensagem: 'No Found'});
    }
    else{
     await connection('pedidos')
     .where( {nome})
     .update({quantidade},{value});
    
     return Response.json('Sucesso');
    } 
   }
};