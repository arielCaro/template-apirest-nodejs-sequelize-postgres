import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const Company = sequelize.define(
    "TbCompany",{
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        Address: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        ContactPhone: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        Active: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        },
        DateCreated: {
            type: DataTypes.DATE,
            allowNull:false,
        },
        DateModified: {
            type: DataTypes.DATE,
            allowNull:false,
        },
        UserCreated: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        UserModified : {
            type: DataTypes.STRING,
            allowNull:false,
        }
    }
);


