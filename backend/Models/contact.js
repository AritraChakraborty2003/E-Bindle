import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    level: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    address: {
      type: String,
    },
    phone1: {
      type: String,
    },
    phone2: {
      type: String,
    },
    descr: {
      type: String,
    },
  },
  {
    collection: "contacts",
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
