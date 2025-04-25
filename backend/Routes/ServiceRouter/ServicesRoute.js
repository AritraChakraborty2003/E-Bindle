import express from "express";
import {
  getAllServices,
  getServiceByTitle,
  createService,
  updateServiceByTitle,
  deleteServiceByTitle,
} from "../../Controllers/ServiceControllers/ServiceControllers.js";
import { MultiImageUploader } from "../../Middlewares/MultiImageUploader.js";

const ServicesRouter = express.Router();

ServicesRouter.get("/", getAllServices);
ServicesRouter.get("/title/:title", getServiceByTitle);
ServicesRouter.post("/", MultiImageUploader(), createService);
ServicesRouter.patch(
  "/title/:title",
  MultiImageUploader(),
  updateServiceByTitle
);
ServicesRouter.delete("/title/:title", deleteServiceByTitle);

export default ServicesRouter;
