import mongoose from "mongoose";

const subserviceSchema = new mongoose.Schema(
  {
    icon: { type: String },
    title: { type: String },
    descr: { type: String },
  },
  { _id: false }
);

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    description: String,
    subimages: [{ type: String }],
    subservice: [subserviceSchema],
  },
  {
    collection: "services",
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
