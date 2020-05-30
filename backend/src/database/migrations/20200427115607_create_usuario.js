exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function (table){
        
          table.increments('id').primary();
          table.string('nome').notNullable();
          table.string('sobreNome').notNullable();
          table.string('cpf',11).notNullable().unique();
          table.string('email').notNullable().unique();
          table.string('usuario').notNullable().unique();
          table.string('celular').notNullable().unique();
          table.string('senha').notNullable();
          table.string('cep').notNullable();
          table.string('cidade').notNullable();
          table.string('rua').notNullable();
          table.string('bairro').notNullable();
          table.char('estado', 2).notNullable();
          table.string('numero').notNullable();
          table.string('complemento').nullable();
          table.boolean('admin').notNullable();
          table.boolean('ativo').notNullable();
          table.boolean('sexo').notNullable();
        });
      };
      
 exports.down = function(knex) {
   return knex.schema.dropTable('usuario');
};