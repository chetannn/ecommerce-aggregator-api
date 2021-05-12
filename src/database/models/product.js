'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      productName: DataTypes.STRING,
      productLink: DataTypes.STRING,
      price: DataTypes.FLOAT,
      source: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      sourceId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Product'
    }
  )
  return Product
}
