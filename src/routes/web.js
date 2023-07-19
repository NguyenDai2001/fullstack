import express from "express";
import homeController from '../controller/homeController';


const router = express.Router();


const initWebRoutes = (app) => {
    router.get("/", homeController.handleHelloWorld)
    router.get("/about", homeController.homeUserPage)
    return app.use("/", router);
}
export default initWebRoutes;