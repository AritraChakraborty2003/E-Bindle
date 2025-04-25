import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    pname: { type: String, required: true },
    title: { type: String, required: true },
    descr: { type: String, required: true },
    techstack: [{ type: String }],
    category: { type: String, required: true },
    time: { type: String },
    images: [{ type: String }],
    link: { type: String },
  },
  {
    collection: "projects",
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
