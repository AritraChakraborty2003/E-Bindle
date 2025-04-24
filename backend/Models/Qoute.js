import mongoose from "mongoose";

const qouteSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    service: { type: String, required: true },
  },
  { timestamps: true }
);

const Qoute = mongoose.model("Qoute", qouteSchema);
export default Qoute;
