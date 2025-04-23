import mongoose from "mongoose";

const socialSchema = new mongoose.Schema(
  {
    icon: { type: String },
    text: { type: String },
    link: { type: String },
  },
  { _id: false }
);

const contactSchema = new mongoose.Schema(
  {
    level: { type: String },
    email: { type: String, required: true },
    socials: [socialSchema],
    address: { type: String },
    phone1: { type: String },
    phone2: { type: String },
    descr: { type: String },
  },
  {
    collection: "contacts",
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
