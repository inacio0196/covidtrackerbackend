
exports.up = function(knex) {
   return knex.schema.createTable('user',function(table){
    table.string('id').primary()
    table.string('primeiroNome').notNullable()
    table.string('segundoNome').notNullable()
    table.string('telefone').notNullable()
    table.string('cep').notNullable()
    table.string('position').notNullable()
    table.string('senha').notNullable()
    table.string('senhaConfirmacao').notNullable()
    // table.string('state', 2).notNullable()

   })
};

exports.down = function(knex) {
  return knex.schema.dropTavle('user')
};


