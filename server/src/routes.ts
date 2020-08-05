import express from "express";
import ClassController from "./controllers/ClassesController";
import ConnectionsControler from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassController();
const connectionsControler = new ConnectionsControler();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

routes.post("/connections", connectionsControler.create);
routes.get("/connections", connectionsControler.index);

export default routes;
