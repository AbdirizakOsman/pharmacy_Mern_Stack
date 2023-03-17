import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
    {
        costName:{type: String, require:true},
        costphone:{type:Number,require:true},
        costgender:{type:String,require:true},
        costAdderess:{type:String,require:true}
    },
    {
        timestamps: true,
    }
);

const costomer = mongoose.model("costmer",customerSchema)
export default costomer;