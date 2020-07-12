
exports.up = function(knex) {
    return knex.schema.createTable('CursoInicio', function (table){
          table.increments('Id').primary();
          table.string('TipoCurso').notNullable();
    });
};

exports.down = function(knex) {
   return knex.schema.dropTable('CursoInicio');
};
