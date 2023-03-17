import  Express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import EmpRouter from "./Routers/EmpRouter.js";
import BillRouter from "./Routers/BillRouter.js";
import CustomerRouters from "./Routers/CustomerRouter.js";
import DrugRouter from "./Routers/DrugRouter.js";
import OderRouter from "./Routers/OderRouter.js";

const app = Express()

dotenv.config();

app.use(Express.json())
app.use(Express.urlencoded({extended:true}));

app.use('/api/employe/', EmpRouter)
app.use('/api/Bill/', BillRouter)
app.use('/api/costomer/', CustomerRouters)
app.use('/api/Drug/', DrugRouter)
app.use('/api/Order/', OderRouter)




mongoose.connect(process.env. NONGODB_URL).then(()=>{
    console.log("connected to database")
}).catch((err) =>{
    console.log(err.message)
}) 

const port = process.env.port || 5000;

app.listen(port, ()=>{
   console.log("server is running on port http://localhost:${port}") ; 
})
