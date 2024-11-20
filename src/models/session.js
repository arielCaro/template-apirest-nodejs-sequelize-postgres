import { DataType, DataTypes } from "sequelize";
import { sequelize } from "../db/database";
import { User } from "./user.js";
import { Application } from "./application.js"

export const Session = sequelize.define(
    "TbSession",
    {
        Id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            AllowNull: false,
        },
        SessionOn: {
            type: DataTypes.DATE,
            AllowNull: false,
        },
        SessionOut: {
            type: DataTypes.DATE,
            AllowNull: false
        },
        TokenBearer: {
            type: DataTypes.TEXT,
            AllowNull: false,
        },
        Active: {
            type: DataTypes.BOOLEAN,
            AllowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: User,
                key: 'UserId'
            }
        },
        AppId:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Application,
                key: 'AppId'
            }
        }

    }
);