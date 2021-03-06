'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este Username."
      },
      validate: {
        len: {
          args: [2, 255],
          msg: "Nome com mínimo 2 caracteres"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este E-mail."
      },
      validate: {
        isEmail: {
          msg: "Digite um E-mail valido"
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "Senha com mínimo 6 caracteres"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return User;
};