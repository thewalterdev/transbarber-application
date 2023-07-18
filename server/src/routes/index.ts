import { Router } from "express";
import createNewService from "../controllers/ServiceControllers/createNewService";
import deleteService from "../controllers/ServiceControllers/deleteService";
import createNewWaiting from "../controllers/Waiting/newWaiting";
import deleteWaiting from "../controllers/Waiting/deleteWaiting";
import getWaiting from "../controllers/Waiting/getWaitings";

const router = Router();

router.get("/waiting", getWaiting);
router.post("/waiting", createNewWaiting);
router.post("/service", createNewService);
router.delete("/service", deleteService);
router.delete("/waiting", deleteWaiting);

export default router;
