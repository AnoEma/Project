exports.up = function(knex) {
    return knex.schema.createTable('cadastro', function (table){
  
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('sobreNome').notNullable();
      table.string('email').notNullable().unique();
      table.string('celular').notNullable().unique();
      table.string('senha').notNullable();
      table.string('cidade').notNullable();
      table.char('uf', 2).notNullable();
      table.boolean('aceitarReceberEmail');
      table.string('validarCadastro').notNullable();
      table.boolean('ativo').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cadastro');
  };