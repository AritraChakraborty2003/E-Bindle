import express from "express";
import {
  getAllProjects,
  getProjectByTitle,
  createProject,
  updateProjectByTitle,
  deleteProjectByTitle,
} from "../../Controllers/ProjectControllers/ProjectControllers.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", getAllProjects);
ProjectRouter.get("/title/:title", getProjectByTitle);
ProjectRouter.post("/", createProject);
ProjectRouter.patch("/title/:title", updateProjectByTitle);
ProjectRouter.delete("/title/:title", deleteProjectByTitle);

export default ProjectRouter;
