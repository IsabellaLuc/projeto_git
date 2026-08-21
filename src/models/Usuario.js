const {DataTypes} = require('sequelize');
/*importando sequelize */
const sequelize = require('../config/database');
/*importando a conexão com o banco de dados */
 
const Usuario = sequelize.define('Usuario', {
    /*definindo o modelo de usuário com os campos nome, email, senha e tipo */
    /*é como criar uma tabela e definir suas colunas */
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        /*validação para não permitir campos nulos */
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.ENUM('operador', 'administrador'),
        /*permite apenas os valores 'operador' ou 'administrador' */
        allowNull: false,
    },
});
 
module.exports = Usuario;