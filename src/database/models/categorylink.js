'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CategoryLink.init({
    link: DataTypes.STRING,
    sourceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryLink',
  });
  return CategoryLink;
};