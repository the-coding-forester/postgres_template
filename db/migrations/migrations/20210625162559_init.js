// new changes you want to implement
exports.up = function (knex) {
  return knex.schema.createTable('person', (table) => {
    table.increments('id');
    table.string('email', 255).notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamps(true, true);
  });
};

// rollback
exports.down = function (knex) {
  return knex.schema.dropTable('person');
};
