var Sequelize = require('../config/db.config.js');
var sequelize = require('sequelize');


    const character = Sequelize.define('cartoons', {
        id : {
            type : sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },

        firstname : {
            type : sequelize.STRING
        },

        lastname : {
            type : sequelize.STRING
        },

        age : {
            type: sequelize.INTEGER
        }

        // created_at : {
        //     type: sequelize.DATE,
        //     allowNull: true,
        // },
        //   updated_at:  sequelize.DATE,
        //   deleted_at: sequelize.DATE
        // });
    });
    //  return character;

module.exports = character;
