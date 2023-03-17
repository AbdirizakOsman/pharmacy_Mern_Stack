import mongoose from "mongoose";

const EmplSchema = mongoose.Schema(
  {
    empname: { type: String, require: true },
    mothername: { type: String, require: true },
    Address: { type: String, require: true },
    Telle: { type: Number, require: true },
  },
  {
    timestapm: true,
  }
);

const employe = mongoose.model("employe", EmplSchema);
export default employe;
