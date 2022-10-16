// src/models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
      {
        timestamps: false,
        underscored: true,
      });
  
      User.associate = (models) => {
        User.hasMany(models.BlogPost, {
          as: 'user',
          foregeinKey: 'userId'
        });
      }

    return User;
  };
  