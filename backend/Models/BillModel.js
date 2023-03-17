import mongoose from "mongoose";

const BillSchema = mongoose.Schema(
  {
    costomername: { type: String, require: true },
    totalAmount: { type: Number, require: true },
    costomerpayment: { type: Number, require: true}
  },
  {
    timestamps: true,
  }
);
const Bill = mongoose.model("Bill", BillSchema);

export default Bill;
