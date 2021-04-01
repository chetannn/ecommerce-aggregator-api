'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Source extends Model {
    static associate(models) {}

     static getStatistics() {
      return sequelize.query(`
      select 
      count(1) as total from Sources
      `, { raw: true })
    }
  };

  Source.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Source',
  });

  
  return Source;
};