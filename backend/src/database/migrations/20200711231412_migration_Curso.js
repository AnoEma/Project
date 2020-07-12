
exports.up = function(knex) {
   return knex.schema.createTable('Curso', function (table){
          table.increments('Id').primary();
          table.int('SubCategoriaId').notNullable();
          table.string('Material').notNullable();
          table.string('MaterialTraduizido').notNullable();

          table.foreign('SubCategoriaId').references('SubCategoria.Id')
   });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Curso');
};
