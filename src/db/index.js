import { Sequelize } from "sequelize";

const {PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT} = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {host: PGHOST, port: PGPORT, dialect: "postgres"});

export const testDB = async() => {
    try {
        await sequelize.authenticate();
    } catch(error) {
        console.log(error)
    }
}

export const syncDB = async() => {
    try{
        await sequelize.sync({logging: false}) // Here you can give different options. Logging: false is for data to be printed in the terminal. Set to false, since it's too much info
    } catch(error) {
        console.log(error)
    }
}

export default sequelize