'use strict';

import Sequelize from "sequelize";

//var env = process.env.NODE_ENV || 'development';
//var config = require(__dirname + '/../config/config.json')[env];


export const sequelize = new Sequelize(
  "Db_template_apirest_nodejs_sequelize", // db name,
  "UsrTemplateRest", // username
  "Dela12ka@", // password
  {
    host: "localhost",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);