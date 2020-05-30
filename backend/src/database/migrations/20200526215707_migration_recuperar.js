
exports.up = function (knex) {
  return knex.schema.createTable('recupera', function (table) {
     table.increments('id').primary();
     table.string('email_recuperador').notNullable();
     table.string('validacaoDeSenha').nullable();
     table.datetime('data').nullable();
   })
};

exports.down = function (knex) {
  return knex.schema.dropTable('recupera');
};
