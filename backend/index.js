import exprees from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { generalRouter } from "./Routes/GeneralRouter/GeneralRouter";

/*---- To access the .env file content----*/
dotenv.config();
const PORT = process.env.PORT || 3000;
/*-----------*/

/*----- Setup and start express Server-----*/
const app = exprees();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*------------------------------*/

/*----- Middleware -----*/
app.use(cors());
app.use(bodyParser.json());

/*----- Routes -----*/

app.use("/api/v1/", generalRouter);

/*--------------------*/
