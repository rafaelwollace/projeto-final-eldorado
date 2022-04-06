'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Device, {
        foreignKey: 'Category_fk'
      })
    }
  }
  Category.init({
    Name:{
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
      len:{
        args:[0,126],
        msg:"Campo Name máximo 126 caracteres."
      },
      notEmpty:{
        args: true,
        msg: "Campo Name não pode ser vazio."
      },
      notNull: {
        msg: 'Campo Name não pode nullo.'
      },
    },
    },
  }, {
    sequelize,
    modelName: 'Category',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Category;
};