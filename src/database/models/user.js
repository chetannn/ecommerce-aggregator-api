'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../../config/config.json')[env]

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}

    static getStatistics() {
      return sequelize.query(`
      select 
      count(1) as total from Users
      `, { raw: true })
    }
  }

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  User.prototype.generateAuthToken = function () {
    const ONE_WEEK = 60 * 60 * 24 * 7
    const token = jwt.sign(
      {
        id: this.id,
        email: this.email,
        isAdmin: this.isAdmin
      },
      config.authentication.jwtSecret,
      {
        expiresIn: ONE_WEEK
      }
    )
    return token
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      profilePath: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
