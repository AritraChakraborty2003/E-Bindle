import express from "express";
import {
  getAllProjects,
  getProjectByTitle,
  createProject,
  updateProjectByTitle,
  deleteProjectByTitle,
} from "../../Controllers/ProjectControllers/ProjectControllers.js";
import { MultiImageUploader } from "../../Middlewares/MultiImageUploader.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", getAllProjects);
ProjectRouter.get("/title/:title", getProjectByTitle);
ProjectRouter.post("/", MultiImageUploader(), createProject);
ProjectRouter.patch(
  "/title/:title",
  MultiImageUploader(),
  updateProjectByTitle
);
ProjectRouter.delete("/title/:title", deleteProjectByTitle);

export default ProjectRouter;
