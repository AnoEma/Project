
exports.up = function(knex) {
  return knex.schema.createTable('poema', function(table){
          table.increments('id').primary();
          table.int('poemaId').notNullable();
          table.string('poemaMaterial').notNullable();
          table.string('poemaMaterialTraduizido').notNullable();
          table.boolean('excluido').notNullable();
          table.string('descricao');

          table.foreign('poemaId').references('subCategoria.cursoInicioId');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('poema');
};
