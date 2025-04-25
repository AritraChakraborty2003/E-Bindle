import express from "express";
import {
  getAllContacts,
  getContactByLevel,
  createContact,
  updateContactByLevel,
  deleteContactByLevel,
} from "../../Controllers/ContactController/ContactController.js";

const ContactRouter = express.Router();

ContactRouter.get("/", getAllContacts);
ContactRouter.get("/level/:level", getContactByLevel);
ContactRouter.post("/", createContact);
ContactRouter.patch("/level/:level", updateContactByLevel);
ContactRouter.delete("/level/:level", deleteContactByLevel);

export default ContactRouter;
