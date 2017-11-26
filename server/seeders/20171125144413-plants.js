'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('plants', [{
      userImageUrl: "",
      wikiImageUrl: "",
      name: "Japanese Maple",
      wikiDescription: "Some Text here",
      type: "Cutting",
      email: "astanley86@gmail.com",
      phone: "9134880886",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      createdAt: new Date(), 
      updatedAt:new Date()
    },
    {
      userImageUrl: "",
      wikiImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Celosia_spicata.jpg/333px-Celosia_spicata.jpg",
      name: "Celosia",
      wikiDescription: "Beautiful flower great for drying",
      type: "Seed",
      email: "astanley86@gmail.com",
      phone: "9134880886",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      createdAt:new Date(), 
      updatedAt:new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('plants', null, {});
  }
};
