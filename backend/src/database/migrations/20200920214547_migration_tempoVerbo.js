
exports.up = function(knex) {
   return knex.schema.createTable('tempoVerbo', function(table){
          table.increments('id').primary();
          table.int('subCategoriaId').notNullable();
          table.string('tempo').notNullable();
          table.string('tempoTraduizido').notNullable();
          table.boolean('excluido').notNullable();

          table.foreign('subCategoriaId').references('subCategoria.id');
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('tempoVerbo');
};
