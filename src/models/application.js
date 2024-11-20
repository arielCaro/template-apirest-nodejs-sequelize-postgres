import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";


export const Application = sequelize.define(
    "TbApplications",
    {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            AllowNull:false,

        },
        Name: {
            type: DataTypes.STRING(150),
            AllowNull: false,
        },
        Active: {
            type: DataTypes.BOOLEAN,
            AllowNull: false,
        }
    }
)