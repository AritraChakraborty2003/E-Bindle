import express from "express";
import {
  getAllInTouch,
  getInTouchById,
  createInTouch,
  updateInTouchById,
  deleteInTouchById,
} from "../../Controllers/InTouchController/InTouchController.js";

const InTouchRouter = express.Router();

InTouchRouter.get("/", getAllInTouch);
InTouchRouter.get("/:id", getInTouchById);
InTouchRouter.post("/", createInTouch);
InTouchRouter.patch("/:id", updateInTouchById);
InTouchRouter.delete("/:id", deleteInTouchById);

export default InTouchRouter;
