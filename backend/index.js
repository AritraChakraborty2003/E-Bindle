import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { generalRouter } from "./Routes/GeneralRouter/GeneralRouter.js";
import { connectDB } from "./Connection/connectDB.js";
import AboutRouter from "./Routes/AboutRouter/AboutRouter.js";
import ServicesRouter from "./Routes/ServiceRouter/ServicesRoute.js";
import ProjectRouter from "./Routes/ProjectRouter/ProjectRouter.js";
import ContactRouter from "./Routes/ContactRouter/ContactRouter.js";
import AdminRouter from "./Routes/AdminRouter/AdminRouter.js";
/*---- To access the .env file content----*/
dotenv.config();
const PORT = process.env.PORT || 3000;
/*-----------*/

/*----- Setup and start express Server-----*/
const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*------------------------------*/

/*--- Database Connection------*/
connectDB(process.env.MONGODB_URI);
/*------------------------*/

/*----- Middleware -----*/

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CORS_ORIGIN // e.g., "https://yourdomain.com"
        : "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

/*----- Routes -----*/
app.use("/api/v1/", generalRouter);
app.use("/api/v1/about", AboutRouter);
app.use("/api/v1/services", ServicesRouter);
app.use("/api/v1/projects", ProjectRouter);
app.use("/api/v1/contact", ContactRouter);
app.use("/api/v1/admin", AdminRouter);
/*--------------------*/
