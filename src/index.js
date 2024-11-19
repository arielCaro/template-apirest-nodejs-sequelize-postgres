import app from "./app.js";
import { sequelize } from "./db/database.js";

async function main() {
    await sequelize.sync({force: false});
    app.listen(4000);
    console.log("Server on port 4000");
}

main();