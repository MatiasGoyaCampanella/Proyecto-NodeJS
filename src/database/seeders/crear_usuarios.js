// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Lucas",
                    apellido: "Fernandez",
                    email: "email@email.com",
                    edad: 33
                }
            }),
        ])
    },
};