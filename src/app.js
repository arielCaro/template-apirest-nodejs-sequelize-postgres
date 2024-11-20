import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
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
            title: 'My API',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
            url: 'http://localhost:3000',
            },
        ],
        },
        apis: ['./routes/*.js'], // files containing annotations as above
    };
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// Middlewares
app.use(morgan("dev"));
app.use(express.json());
// Routes
app.use("/api/companies", companyRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/Users", usersRoles);

export default app;