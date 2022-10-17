// src/models/User.js
module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true 
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false
       },
      email: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      password: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      image: { 
        type: DataTypes.STRING,
        allowNull: false
      },
    },
      {
        tableName: 'users',
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
  