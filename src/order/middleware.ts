import {Request, Response, NextFunction } from "express";
import billModel from "../models/bill_model";
import shortid from "shortid";
import { inforOrder } from "./dto/order_dto";

export function handleCreateBill(req: Request, res: Response, next: NextFunction) {
    try{   
        const id: string = shortid.generate();
        const status: string = "Đang chờ xử lý"
        req.body = {...req.body, id, status}
        next();
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}

export async function checkId(req: Request, res: Response, next: NextFunction) {
    try{
        const check: inforOrder | null = await billModel.findOne({id: req.body.id});
        !check ? res.status(400).json({message: "Not Found Id"}) : next();
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}

export function validateBill(req: Request, res: Response, next: NextFunction) {
    try{
        billModel.validate(req.body)
        .then(() => next())
        .catch(() => {
            res.status(400).json({message: "Not enough information, please try again"});
        })
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}