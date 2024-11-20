import express from "express";
import morgan from "morgan";
import swaggerJSDoc  from "swagger-jsdoc";
import swaggerUi  from "swagger-ui-express"
// Import routes
import companyRoutes from "./routes/company.Routes.js";
import rolesRoutes from "./routes/role.Routes.js";
import usersRoles from "./routes/user.Routes.js";

const app = express();
// Swagger setup
const swaggerOptions = {
        swaggerDefinition: {
        myapp: '3.0.0',
        info: {
            title: 'Template API REST - EXPRESS - SEQUELIZE - POSTGRES',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
            url: 'http://localhost:4000',
            },
        ],
        },
        apis: ['./routes/*.js'], // files containing annotations as above
    };

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/Users", usersRoles);
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
export default app;