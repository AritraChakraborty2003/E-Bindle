import express from "express";
import {
  getAllAbout,
  getAboutBySection,
  createAbout,
  patchAboutBySection,
  deleteAboutBySection,
} from "../../Controllers/AboutControllers/AboutController.js";
import { ImageUploaderSingle } from "../../Middlewares/ImageUploaderSingle.js";

const AboutRouter = express.Router();

AboutRouter.get("/", getAllAbout); // Get all About entries
AboutRouter.get("/section/:section", getAboutBySection); // Get by section
AboutRouter.post("/", ImageUploaderSingle(), createAbout); // Create new About entry
AboutRouter.patch(
  "/section/:section",
  ImageUploaderSingle(),
  patchAboutBySection
); // Patch by section
AboutRouter.delete("/section/:section", deleteAboutBySection); // Delete by section

export default AboutRouter;
