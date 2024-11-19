import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const User = sequelize.define(
    "TbUser",
    {
        Id: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    {
        Name: DataTypes.STRING,
        AllowNull: false,
    },
    {
        LastName: DataTypes.STRING,
        AllowNull: false,
    },
    {
        Email: DataTypes.STRING,
        AllowNull: false,
    },
    {
        Password: DataTypes.STRING,
        AllowNull: false,
    },
    {
        Active: DataTypes.BOOLEAN,
        AllowNull:false,
    },
    {
        DateCreated: DataTypes.DATE,
        AllowNull: false,
    },
    {
        DateModified: DataTypes.DATE,
        AllowNull:false,
    },
    /*{
        IdCompany: DataTypes.INTEGER,
        AllowNull: false,
    },*/
    {
        IdRole: DataTypes.INTEGER,
        AllowNull: false,
    },
    {
        Phone: DataTypes.INTEGER,
        AllowNull: false,
    },
    {
        PhoneMobile: DataTypes.INTEGER,
        AllowNull: false,
    },
    {
        CodePhoneCountry: DataTypes.STRING,
        AllowNull: false,
    },
);

