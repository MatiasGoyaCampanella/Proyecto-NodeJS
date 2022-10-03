
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn ('usuario', 'profesion', {
               type: Sequelize.STRING,
               allowNull: true,
            }),
        ])
    },


    down: (queryInterface, Sequelize) => {

    }
};
