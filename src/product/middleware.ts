import {Request, Response, NextFunction } from "express";
import shortid from "shortid";
import mongoose from "../config/mongoose_config";

export function handleCreateProduct(req: Request, res: Response, next: NextFunction) {
    try{
        const id = shortid.generate();
        req.body.category = mongoose.Types.ObjectId(req.body.category);
        req.body = {id, ...req.body};
        next();
    }catch{
        res.status(404).json({message: "Please try again"})
    }
}