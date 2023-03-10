const Sequelize = require("sequelize");
const db = require("../database/index");

// 定义表
const User = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: { type: Sequelize.STRING, allowNull: false },
});


module.exports = User;