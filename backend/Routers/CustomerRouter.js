import express from "express";
import costomer from "../Models/CustomerModel.js";

const CustomerRouters = express.Router();

CustomerRouters.get("/all", async (req, res) => {
  const sogali = await costomer.find();
  res.send(sogali);
});

//post
CustomerRouters.post("/add", async (req, res) => {
  const kudar = new costomer({
    costName: req.body.costName,
    costphone: req.body.costphone,
    costgender: req.body.costgender,
    costAdderess: req.body.costAdderess,
  });
  await kudar.save();
  res.send("Save Success");
});

//Delete

CustomerRouters.delete('/:id', async (req, res) => {
  costomer
    .remove({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "data deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(404).json({
        Error: err,
      });
    });
});

//update data

CustomerRouters.put("/id:", async (req, res) => {
  console.log(res.params.id);
  costomer
    .findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          costName: req.body.costName,
          costphone: req.body.costphone,
          costgender: req.body.costgender,
          costAdderess: req.body.costAdderess,
        },
      }
    )
    .then((result) => {
      req.status(200).json({
        update: result,
      });
    })
    .catch((err) => {
      console.log(err);
      req.status(404).json({
        Error: err,
      });
    });
});

export default CustomerRouters;
