'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    
    return queryInterface.bulkInsert('Listings', [{
        
        user_id: 1,
        title: 'Hammer',
        price: 9.99,
        description: "It hammers stuff."
      },
      {
        user_id: 2,
        title: 'Sriracha',
        price: 4.99,
        description: "It goes good on ..."
      },
      {
        user_id: 1,
        title: 'Screwdriver',
        price: 14.99,
        description: 'When a hammer is not enough ..'
      },
      {
        user_id: 2,
        title: 'Screwdriver',
        price: 12.99,
        description: 'Highway robbery prices, but this hammers you ...'
      }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Listings', null, {});
  }
};
