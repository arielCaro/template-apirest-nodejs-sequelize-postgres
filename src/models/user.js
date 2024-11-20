import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Role } from "./role.js";
import { Company } from "./company.js";

export const User = sequelize.define(
    "TbUsers",
    {
        Id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            AllowNull: false,
        },
        Name: {
            type: DataTypes.STRING,
            AllowNull: false,
        },
        LastName: {
            type:DataTypes.STRING,
            AllowNull: false,
        },
        Email: {
            type:DataTypes.STRING,
            AllowNull: false,
        },
        Password: {
            type:DataTypes.STRING,
            AllowNull: false,
        },
        Active: {
            type:DataTypes.BOOLEAN,
            AllowNull:false,
        },
        DateCreated: {
            type:DataTypes.DATE,
            AllowNull: false,
        },
        DateModified:{
            type:DataTypes.DATE,
            AllowNull:false,
        },
        Phone: {
            type:DataTypes.INTEGER,
            AllowNull: false,
        },
        PhoneMobile: {
            type:DataTypes.INTEGER,
            AllowNull: false,
        },        
        CodePhoneCountry: {
            type:DataTypes.STRING,
            AllowNull: false,
        },
        CompanyId: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            primaryKey: true,
            references: {
                model: Company,
                key: 'CompanyId'
            }
        },
        RoleId: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            primaryKey: true,
            references: {
                model: Role,
                key: 'RoleId'
            }
        },
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'TbUsers'
    }
    
);
