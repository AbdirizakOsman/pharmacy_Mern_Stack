import  express  from "express";
import Order from "../Models/OderModel.js";

//Reading data
const OderRouter = express.Router();

OderRouter.get("/all",async(req,res)=>{
    const sogali = await Order.find();
    res.send(sogali);
});


// post 

OderRouter.post("/add",async(req,res)=>{
    const kudar = new Order({
        OderID: req.body.OderID,
        Dragname: req.body.Dragname,
        oderquentity:req.body.oderquentity,

    });
    await kudar.save();
    res.send("Saved Success");
});

// Delete

OderRouter.delete("/:id",async(req,res)=>{
    Bill.remove({ _id: req.params.id})
    .then((result) =>{
        res.statusCode(200).json({
            message:"data deleted",
            result: result,
        })
    })
    .catch((err)=>{
        res.status(404).json({
            Error: err,
        });
    });
});

//update
OderRouter.put("/:id",async(req,res)=>{
    console.log(res.params.id);
    Order.findByIdAndUpdate(
        { _id: req.params.id},
        {
           $set:{
            OderID: req.body.OderID,
            Dragname: req.body.Dragname,
            oderquentity: req.body.oderquentity,

            },
        }
    )
    .then((result)=>{
        req.status(200).json({
            update:result,
        });
    })
    .catch((err)=>{
        console.log(err);
        req.status(404).json({
            Error:err,
        });

    });
});

export default OderRouter;
