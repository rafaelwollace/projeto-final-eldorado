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
    Color: DataTypes.STRING,
    PartNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Device',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Device;
};