import express from "express";
import morgan from "morgan";

const app = express();

// Import routes

import companyRoutes from "./routes/company.Routes.js";
import rolesRoutes from "./routes/role.Routes.js";
import usersRoles from "./routes/user.Routes.js"

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/api/companies", companyRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/Users", usersRoles);

export default app;