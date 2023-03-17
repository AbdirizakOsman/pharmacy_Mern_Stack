import mongoose from "mongoose";

const DrugSchema = mongoose.Schema(
    {
        Drugname:{type:String,require:true},
        DrugQuententy:{type:String,require:true},
        Drugprice:{type:String,require:true}
    },{
        timestamps: true,
    }
);

const Drug = mongoose.model("Drug",DrugSchema);
export default Drug;
