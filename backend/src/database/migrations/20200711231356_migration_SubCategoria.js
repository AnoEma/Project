exports.up = function(knex) {
   return knex.schema.createTable('subCategoria', function (table){
          table.increments('id').primary();
          table.int('cursoInicioId').notNullable();
          table.string('descricao').notNullable();
          table.boolean('excluido').notNullable();

          table.foreign('cursoInicioId').references('cursoInicio.id')
   });
};
       
exports.down = function(knex) {
   return knex.schema.dropTable('subCategoria');
};