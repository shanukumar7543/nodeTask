'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class fakeApiRecords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fakeApiRecords.init(
    {
      API: DataTypes.STRING,
      Description: DataTypes.CHAR,
      Auth: DataTypes.CHAR,
      HTTPS: DataTypes.BOOLEAN,
      Cors: DataTypes.STRING,
      Link: DataTypes.CHAR,
      Category: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: 'fake_api_records',
    },
  )
  return fakeApiRecords
}
