import express from "express";
import {
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonialById,
  deleteTestimonialById,
} from "../../Controllers/TestimonialController/TestimonialController.js";

const TestimonialRouter = express.Router();

TestimonialRouter.get("/", getAllTestimonials);
TestimonialRouter.get("/:id", getTestimonialById);
TestimonialRouter.post("/", createTestimonial);
TestimonialRouter.patch("/:id", updateTestimonialById);
TestimonialRouter.delete("/:id", deleteTestimonialById);

export default TestimonialRouter;
