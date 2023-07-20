import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;


//configViewEngine
configViewEngine(app);
// config body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// init web reutes
initWebRoutes(app);



app.listen(PORT, () => {
    console.log(">>> bach end Runing: " + PORT)
});


