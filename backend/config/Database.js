import { Sequelize } from "sequelize";

const db = new Sequelize("fullstack2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
