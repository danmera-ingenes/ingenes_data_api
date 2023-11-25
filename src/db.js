require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DATABASE
} = process.env;

// configure sequelize connection to mariadb
const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mariadb',
  logging: false, // set to console.log to see the raw SQL queries
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => modelDefiners.push(require(path.join(__dirname, '/models', file))));

// Inject sequelize connection to all models
modelDefiners.forEach(model => model(sequelize));

// Capitalize all models
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map(entry => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Create relationships between models
// const {User, Recipe, Diet} = sequelize.models;

// Recipe.belongsToMany(Diet, {through: 'recipe_diet'});
// Diet.belongsToMany(Recipe, {through: 'recipe_diet'});
// User.hasMany(Recipe);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};