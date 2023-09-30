const DataTypes = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isMail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
