const { DataTypes,Model } =require('sequelize')
const sequelize=require("../config/db")

class UserDetails extends Model {
   
  }

  UserDetails.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "userDetails",
    }
  );
  
  module.exports= UserDetails;