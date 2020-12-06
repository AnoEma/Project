
exports.up = function(knex) {
   return knex.schema.createTable('curso', function (table){
          table.increments('id').primary();
          table.int('subCategoriaId').notNullable();
          table.string('material').notNullable();
          table.string('materialTraduizido').notNullable();
          table.boolean('excluido').notNullable();
          table.string('descricao');

          table.foreign('subCategoriaId').references('subCategoria.id')
   });
};

exports.down = function(knex) {
  return knex.schema.dropTable('curso');
};
