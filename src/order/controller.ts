import {response, Router} from "express";
import * as service from "./service";
import * as middleware from "./middleware";
const routerOder = Router();

routerOder.get("/bills", async (req, res) => {
    const message = await service.getBills();
    if(!message.err){
        res.status(200).json({bills: message.data});
    }else{res.status(500).json({message: "Server has problem, please try again"})}
})

routerOder.get("/bill/:id", async (req, res) => {
    const message = await service.getDetailBills(req.params.id);
    if(!message.data) {
        res.status(404).json({message: "Bill is not exits"});
    }
    else if(!message.err){
        res.status(200).json({bill: message.data});
    }else{res.status(500).json({message: "Server has problem, please try again"})}
})

routerOder.post("/create_bill", 
    middleware.handleCreateBill,  
    async (req, res) => {
        const message = await service.createBill(req.body);
        if(!message.err){
            res.status(200).json({message: "Bill is update"});
        }else{res.status(500).json({message: "Server has problem, please try again"})}
    }
)

routerOder.put("/update_status", async (req, res) => {
    const message = await service.updateStatus(req.body);
    if(!message.err){
        res.status(200).json({message: "Status is updated"})
    }else{res.status(500).json({message: "Server has problem, please try again"})}
})

routerOder.delete("/delete_bills", async (req, res) => {
    const message = await service.cancelBill(req.body.id);
    if(!message.err){
        res.status(200).json({message: "Bills is canceled"})
    }else{res.status(500).json({message: "Server has problem, please try again"})}
})

export default routerOder;