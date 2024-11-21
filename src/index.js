import app from "./app.js";
import { sequelize } from "./db/database.js";

const port = process.env.PORT || 4000;
async function main() {
    await sequelize.sync({force: false});
    app.listen(port);
    console.log("Server on port 4000");
}

main();