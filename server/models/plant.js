'use strict';
module.exports = (sequelize, DataTypes) => {
  var plant = sequelize.define('plant', {
    userImageUrl: DataTypes.STRING,
    wikiImageUrl: DataTypes.STRING,
    name: DataTypes.STRING,
    wikiDescription: DataTypes.TEXT,
    type: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.CHAR,
    address: DataTypes.CHAR,
    city: DataTypes.STRING,
    state: DataTypes.CHAR,
    zipCode: DataTypes.CHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return plant;
};