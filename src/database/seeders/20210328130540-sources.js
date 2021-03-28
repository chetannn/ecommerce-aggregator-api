'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
      await queryInterface.bulkInsert('Sources', [{
        name: "Daraz",
        url: "http://daraz.com.np",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Sastodeal",
        url: "https://sastodeal.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "OkDam",
        url: "https://okdam.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
