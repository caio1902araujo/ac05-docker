const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Topic extends Model {}
Topic.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING,
}, { sequelize, modelName: 'topic' });

module.exports = {Topic, sequelize}