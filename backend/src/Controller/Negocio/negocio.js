const connection = require('../../database/connection');


module.exports={
    async index(Resquest, Response){
       const verbo = await connection('tempoVerbo').select('*');
       return Response.json(verbo);
    }
};