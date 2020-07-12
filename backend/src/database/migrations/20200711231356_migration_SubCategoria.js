exports.up = function(knex) {
   return knex.schema.createTable('SubCategoria', function (table){
          table.increments('Id').primary();
          table.int('CursoInicioId').notNullable();
          table.string('Descricao').notNullable();

          table.foreign('CursoInicioId').references('CursoInicio.Id')
   });
};
       
exports.down = function(knex) {
   return knex.schema.dropTable('SubCategoria');
};