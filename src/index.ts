import { UserController } from "./Controller/UserController";
import app from "./Services/app";

const userController = new UserController()

app.post("/login", userController.login)