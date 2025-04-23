import express from "express";
import {
  getAllServices,
  getServiceByTitle,
  createService,
  updateServiceByTitle,
  deleteServiceByTitle,
  updateSubserviceByTitle,
  deleteSubserviceByTitle,
} from "../../Controllers/ServiceControllers/ServiceControllers.js";

const ServicesRouter = express.Router();

ServicesRouter.get("/", getAllServices);
ServicesRouter.get("/title/:title", getServiceByTitle);
ServicesRouter.post("/", createService);
ServicesRouter.patch("/title/:title", updateServiceByTitle);
ServicesRouter.delete("/title/:title", deleteServiceByTitle);
ServicesRouter.patch(
  "/title/:serviceTitle/subservice/:subserviceTitle",
  updateSubserviceByTitle
);
ServicesRouter.delete(
  "/title/:serviceTitle/subservice/:subserviceTitle",
  deleteSubserviceByTitle
);

export default ServicesRouter;
