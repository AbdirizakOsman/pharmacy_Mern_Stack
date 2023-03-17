import mongoose from "mongoose";

const OderSchema = mongoose.Schema(
    {
        OderID:{type:Number,require:true},
        Dragname:{type:String,require:true},
        oderquentity:{type:Number,require:true}
    },

    {
        timestapm: true,
    }
);

const Order = mongoose.model("Order",OderSchema)
export default Order;


