'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.belongsTo(models.Category, {
        foreignKey: 'Category_fk'
      })
    }
  }

  Device.init({
    Color:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is:{
          args:[/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g],
          msg:"Campo Color Somente letras."
        },
        len:{
          args:[0,16],
          msg:"Campo Color máximo 16 caracteres."
        },
        notNull: {
          msg: 'Campo Color não pode ser nulo.'
        },

      },
    },
    PartNumber:{
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        args: true,
        msg: 'Campo PartNumber somente números inteiro.'
      },
      notNull: {
        msg: 'Campo PartNumber não pode ser nulo.'
      },
    },
    },
  }, {
    sequelize,
    modelName: 'Device',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Device;
};