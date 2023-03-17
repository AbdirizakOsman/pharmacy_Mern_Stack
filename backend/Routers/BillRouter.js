import express from "express";
import Bill from "../Models/BillModel.js";

//Reading data
const BillRouter = express.Router();

BillRouter.get("/all", async (req, res) => {
  const sogali = await Bill.find();
  res.send(sogali);
});

// post

BillRouter.post("/add", async (req, res) => {
  const kudar = new Bill({
    costomername: req.body.costomername,
    totalAmount: req.body.totalAmount,
    costomerpayment: req.body.costomerpayment,
  });
  await kudar.save();
  res.send("Saved Success");
});

// Delete

BillRouter.delete("/:id", async (req, res) => {
  Bill.remove({ _id: req.params.id })
    .then((result) => {
      res.statusCode(200).json({
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

//update
BillRouter.put("/:id", async (req, res) => {
  console.log(res.params.id);
  Bill.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        costomername: req.body.costomername,
        totalAmount: req.body.totalAmount,
        costomerpayment: req.body.costomerpayment,
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
      res.status(404).json({
        Error: err,
      });
    });
});

export default BillRouter;
