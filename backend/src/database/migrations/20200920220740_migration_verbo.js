
exports.up = function(knex) {
  return knex.schema.createTable('verbo', function(table){
          table.increments('id').primary();
          table.int('tempoId').notNullable();
          table.string('verboMaterial').notNullable();
          table.string('verboMaterialTraduizido').notNullable();
          table.boolean('excluido').notNullable();

          table.foreign('tempoId').references('tempoVerbo.id');
  });
};

exports.down = function(knex) {
   return knex.schema.dropTable('verbo');
};
