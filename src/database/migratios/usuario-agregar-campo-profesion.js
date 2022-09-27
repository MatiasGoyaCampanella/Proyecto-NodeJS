
'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn ("usuario", "profesion", {
               type: Sequelize.STRING,
               allowNull: true,
            }),
        ])
    },
    down: (queryInterface, Sequelize) => {

    }
};
