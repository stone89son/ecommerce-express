import {Request, Response, NextFunction } from "express";
import shortid from "shortid";

export function handleCreateBill(req: Request, res: Response, next: NextFunction) {
    try{   
        const id = shortid.generate();
        const status = "Đang chờ xử lý"
        req.body = {...req.body, id, status}
        next();
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}