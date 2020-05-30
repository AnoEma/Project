
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function (table){
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.decimal('preco').notNullable();
        table.int('quantidade').nullable();
        table.decimal('value').nullable();
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');
};