import { Router } from "express";
import createNewService from "../controllers/ServiceControllers/createNewService";
import deleteService from "../controllers/ServiceControllers/deleteService";
import createNewWaiting from "../controllers/Waiting/newWaiting";
import deleteWaiting from "../controllers/Waiting/deleteWaiting";
import getWaiting from "../controllers/Waiting/getWaitings";
import createUser from "../controllers/UserController/createUser";
import handleAuth from "../controllers/UserController/handleAuth";
import getUsers from "../controllers/UserController/getUsers";

const router = Router();

router.get("/waiting", getWaiting);
router.get("/users", getUsers);
router.post("/waiting", createNewWaiting);
router.post("/service", createNewService);
router.post("/user", createUser);
router.post("/login", handleAuth);
router.delete("/service", deleteService);
router.delete("/waiting", deleteWaiting);

export default router;
