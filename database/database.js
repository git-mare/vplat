const Sequelize = require("sequelize")
    // valor 1: nome da database
    // valor 2: nome do usuário para acessar o mysql
    // valor 3: senha do usuário para acessar o mysql
const connection = new Sequelize('vplat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection