import express from "express";
import { sendMail } from "../../Controllers/EmailController/sendEmail.js";

const emailRouter = express.Router();

emailRouter.post("/send", sendMail);
