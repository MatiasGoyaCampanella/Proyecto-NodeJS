"use strict" // para que no se pueda usar variables no definidas



module.exports = (sequelize, DataTypes) => {

    let Usuario = sequelize.define("usuario", { // defino el modelo de la tabla usuario
        id: {
            type: DataTypes.BIGINT, //tipo de dato
            autoIncrement: true, //autoincrementa
            primarykey: true, //clave primaria
            allowNull: false // no permitir nulo
        },
        nombre: { //nombre de la columna
            tipe: DataTypes.STRING, //tipo de dato
            allowNull: false //no puede ser nulo
        },
        apellido: { //nombre de la columna
            tipe: DataTypes.STRING, //tipo de dato
            allowNull: false //no puede ser nulo
        },
        mail: { //nombre de la columna
            tipe: DataTypes.STRING, //tipo de dato
        },
        edad: { //nombre de la columna
            tipe: DataTypes.INTEGER, //tipo de dato
        },
        createdAt: { // fecha de creación
            tipe: DataTypes.DATE, //tipo de dato
            field: "created_at", //nombre de la columna
            defaultValue: DataTypes.NOW, //valor por defecto
            allowNull: false //no puede ser nulo
        },
        updatedAt: { // fecha de creación
            tipe: DataTypes.DATE, //tipo de dato
            field: "updated_at", //nombre de la columna
            defaultValue: DataTypes.NOW, //valor por defecto
            allowNull: false //no puede ser nulo
        },
        deletedAt: { // fecha de creación
            tipe: DataTypes.DATE, //tipo de dato
            field: "deleted_at", //nombre de la columna
        }
    }, {
        paranoid: true, // elimina los registros de forma lógica
        freezeTableName: true, //no va a modificar el nombre de la tabla a plural
}) 
Usuario.associate = models => {
    //acá se relacionan las tablas
}

return Usuario
}