const connection = require('../database/connection');


module.exports ={
    async index(Resquest, Response){
        const pedidos = await connection('pedidos').select('*');
        return Response.json(pedidos);
    },

    async create(Resquest,Response){
        const {nome,preco} = Resquest.body;
        const quantidade = 0;
        const value = 0;
       
        await connection('pedidos').insert({
            nome,
            preco,
            quantidade,
            value,
        });
        return Response.status(200).json({ mensagem: 'O produto foi adicionado com sucesso'}); 
    }
};