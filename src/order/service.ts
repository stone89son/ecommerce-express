import billModel from "../models/bill_model";
import {Request, Response} from "express";
import { inforOrder } from "./dto/order_dto";

export async function getBills(req: Request, res: Response): Promise<void>{
    try{
        const data: inforOrder[] | [] = await billModel.find({});
        res.status(200).json({data});
    }catch{
        res.status(500).json({message: "Serer has problem, please try again"});
    }
}

export async function getDetailBills(req: Request, res: Response): Promise<void>{
    try{
        const data: inforOrder | null = await billModel.findOne({id: req.params.id}).populate("product");
        res.status(200).json({data});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}
export async function createBill(req: Request, res: Response): Promise<void> {
    try{
        await billModel.create(req.body);
        res.status(201).json({message: "Bills is created"})
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}
export async function updateStatus(req: Request, res: Response): Promise<void> {
    try{
        const {id, status} = req.body;
        await billModel.updateOne({id}, {status});
        res.status(201).json({message: "Status is updated"})
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}
export async function cancelBill(req: Request, res: Response): Promise<void>{
    try{
        await billModel.deleteOne({id: req.body.id});
        res.status(200).json({message: "Bill is cancel"});
    }
    catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}  
