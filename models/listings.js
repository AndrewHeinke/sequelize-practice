'use strict';
module.exports = function(sequelize, DataTypes) {
  var Listings = sequelize.define('Listings', {
    title: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    description: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        Listings.belongsTo(models.Users);
      }
    }
  });
  return Listings;
};