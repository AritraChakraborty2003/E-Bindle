import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    subimages: [{ type: String }],
    subservice: [{ type: String }],
  },
  {
    collection: "services",
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
