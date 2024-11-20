import { User } from "./user";
import { Role } from "./role";
import { Company } from "./company";

Role.HasMany(User, {onDelete: 'cascade'})
Company.HasMany(User, {onDelete: 'cascade'})

export default { User, Role, Company }

