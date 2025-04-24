import mongoose from "mongoose";

const inTouchSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const InTouch = mongoose.model("InTouch", inTouchSchema);
export default InTouch;
