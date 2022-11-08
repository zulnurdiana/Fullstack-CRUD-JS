import express from "express";
import {
  getUsers,
  getUsersById,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/Usercontroller.js";

const route = express.Router();

route.get("/users", getUsers);
route.get("/users/:id", getUsersById);
route.post("/users/add", createUser);
route.put("/users/:id", updateUser);
route.delete("/users/:id", deleteUser);

export default route;
