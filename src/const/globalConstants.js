// Están todas las constantes de la API en este archivo

require("dotenv").config() //importa dotenv para obtener las variables de entorno

module.exports = {
    PORT: process.env.PORT || 5000,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD

};