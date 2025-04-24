import express from "express";
import {
  getAllQoutes,
  getQouteById,
  createQoute,
  updateQouteById,
  deleteQouteById,
} from "../controllers/qouteController.js";

const QouteRouter = express.Router();

QouteRouter.get("/", getAllQoutes);
QouteRouter.get("/:id", getQouteById);
QouteRouter.post("/", createQoute);
QouteRouter.patch("/:id", updateQouteById);
QouteRouter.delete("/:id", deleteQouteById);

export default QouteRouter;
