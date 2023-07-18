import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;


//configViewEngine
configViewEngine(app);

// init web reutes
initWebRoutes(app);



app.listen(PORT, () => {
    console.log(">>> bach end Runing: " + PORT)
});


