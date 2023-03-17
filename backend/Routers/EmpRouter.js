import  Express  from "express";
import employe from "../Models/EmpModel.js";
const EmpRouters = Express.Router()

//Reading data
EmpRouters.get('/all',async(req,res)=>{
    const sogali = await employe.find() 

    res.send(sogali);
});

//post
EmpRouters.post("/add", async(req,res)=>{
    const kudar = new employe({
                empname: req.body.empname,
                mothername: req.body.mothername,
                Address: req.body.Address,
                Telle: req.body.Telle,
    });
    await kudar.save();
    res.send("Save Success")
 
});

//Delete

EmpRouters.delete("/:id", async(req,res)=>{
    employe.remove({ _id: req.params.id})
    .then((result)=>{
        res.status(200).json({
            message: "data deleted",
            result:result
        })
    })
    .catch((err)=>{
        req.status(404).json({
            Error: err,
        });
    });
});

//update data

EmpRouters.put("/id:",async(req,res)=>{
    console.log(res.params.id)
    costomer.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set:{
                empname: req.body.empname,
                mothername: req.body.mothername,
                Address: req.body.Address,
                Telle: req.body.Telle,

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
         res.status(404).json({
            Error: err,
         });
    });
});

export default EmpRouters;