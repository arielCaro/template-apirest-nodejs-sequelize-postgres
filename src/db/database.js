import Sequelize  from "sequelize";

export const sequelize = new Sequelize(
    'Db_template_apirest_nodejs_sequelize', 
    'UsrTemplateRest', 
    'Dela12ka@',
    { 
        host: 'localhost',
        dialect: 'postgres'
    }
);