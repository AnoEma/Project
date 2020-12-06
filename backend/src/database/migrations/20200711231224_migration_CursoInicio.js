
exports.up = function(knex) {
    return knex.schema.createTable('cursoInicio', function (table){
          table.increments('id').primary();
          table.string('tipoCurso').notNullable();
          table.boolean('excluido').notNullable();
          table.string('descricao');
    });
};

exports.down = function(knex) {
   return knex.schema.dropTable('cursoInicio');
};
