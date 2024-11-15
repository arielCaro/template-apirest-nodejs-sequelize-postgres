import app from "./app.js";
import { sequelize } from "./db/database.js";
//import  './models/role.js';
import { Role } from './models/role.js'
async function main(){
    try {
        console.log('execute Connection .');
        await sequelize.authenticate();
        //await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(3000);
        console.log("Server in listering  on port:", 3000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();