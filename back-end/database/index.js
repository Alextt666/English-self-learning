const {Sequelize} = require('sequelize');

const sq = new Sequelize('english','root','123456',{
    host:"localhost",
    dialect:'mysql',
    define:{
        timestamps:false
    }
})


module.exports = sq;