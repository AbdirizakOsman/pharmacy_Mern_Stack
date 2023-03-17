import  express  from "express";
import Drug from "../Models/DrugModel.js";


//Reading data
const DrugRouter = express.Router();

DrugRouter.get("/all",async(req,res)=>{
    const sogali = await Drug.find();
    res.send(sogali);
});

// post
DrugRouter.post("/add",async(req,res)=>{
    const kudar = new  Drug({
        Drugname:req.body.Drugname,
        DrugQuententy:req.body.DrugQuententy,
        Drugprice:req.body.Drugprice

    });
    await kudar.save();
    res.send("Saved Success");
});

// Delete data

DrugRouter.delete("/:id",async(req,res)=>{
    Drug.remove({ _id: req.params.id})
    .then((relust)=>{
        res.status(200).json({
            message: "Data Deleted",
            relust: relust
        })

    })
    .catch((err)=>{
        res.status(404).json({
            Error: err
        });
       
    });
});

// Update data
DrugRouter.put("/:id",async(req,res)=>{
    console.log(res.params.id);
    Drug.findByIdAndUpdate(
        { _id: req.params.id},
        {
            $set:{
                Drugname:{type:String,require:true},
                DrugQuententy:{type:Number,require:true},
                Drugprice:{type:Number,require:true}

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

export default DrugRouter;