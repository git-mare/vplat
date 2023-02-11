const Sequelize = require("sequelize")
const connection = require("./database")

// Criar tabela "videos" com as respectivas colunas
const Videos = connection.define('videos', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    playerdir: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    views: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0

    },
    createdAt: {
        type: Sequelize.DATEONLY,
    }
})
Videos.sync({ force: false }).then(() => {})

module.exports = Videos