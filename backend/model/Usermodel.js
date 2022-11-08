import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const DataTypes = Sequelize;

const User = db.define(
  "users",
  {
    nama: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    hobby: DataTypes.STRING,
    alamat: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
