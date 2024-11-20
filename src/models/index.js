import { User } from "./user.js";
import { Role } from "./role.js";
import { Company } from "./company.js";
import { Application } from "./application.js";
import { Session } from "./session.js";

//Role.HasMany(User, {onDelete: 'cascade'})
//Company.HasMany(User, {onDelete: 'cascade'})

export default { User, Role, Company, Application, Session }

