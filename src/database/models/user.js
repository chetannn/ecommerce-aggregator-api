'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

function hashPassword(user, options) {
  const SALT_FACTOR = 8

  if(!user.changed('password')) {
    return;
  }

  return bcrypt
        .genSalt(SALT_FACTOR)
        .then(salt => bcrypt.hash(user.password, salt, null))
        .then(hash =>  {
          user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  };

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  });
  return User;
};