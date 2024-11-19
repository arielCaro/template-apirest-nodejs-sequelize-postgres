import { DataTypes } from  "sequelize";
import { sequelize } from "../db/database.js";

export const Role = sequelize.define(
    "TbRole", { 
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});