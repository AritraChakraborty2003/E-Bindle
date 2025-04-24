import express from "express";
import {
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessageById,
  deleteMessageById,
} from "../../Controllers/MessageControllers/MessageControllers.js";

const MessageRouter = express.Router();

MessageRouter.get("/", getAllMessages);
MessageRouter.get("/:id", getMessageById);
MessageRouter.post("/", createMessage);
MessageRouter.patch("/:id", updateMessageById);
MessageRouter.delete("/:id", deleteMessageById);

export default MessageRouter;
