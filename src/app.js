import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import projectRoutes from "./routes/project.Routes.js";
import taskRoutes from "./routes/task.routes.js";
import companyRoutes from "./routes/company.Routes.js";
import rolesRoutes from "./routes/role.Routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/roles", rolesRoutes);

export default app;