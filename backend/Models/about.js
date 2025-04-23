import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    image: { type: String },
    title: { type: String },
    descr: { type: String },
    mainTitle: { type: String },
  },
  {
    collection: "about",
    timestamps: true,
  }
);

const About = mongoose.model("About", aboutSchema);
export default About;
