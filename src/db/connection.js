// Determines the current environment where the application
// code is running and stores the value in the env variable
const env = process.env.NODE_ENV || 'development';
// Requires the database configuration object from the knexfile.js
// for the current environment and stores it in the config variable
const config = require('../../knexfile')[env];
// Initializes a Knex instance by calling the knex module, passing in config as an argument.
const knex = require('knex')(config);

module.exports = knex;
