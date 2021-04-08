import {Request, Response, NextFunction } from "express";
import shortid from "shortid";
import mongoose from "../config/mongoose_config";
import ProductModel from "../models/product_model";

export function handleCreateProduct(req: Request, res: Response, next: NextFunction) {
    try{
        const id = shortid.generate();
        req.body.images = req.body.images.map((item: string) => mongoose.Types.ObjectId(item))
        req.body.category = mongoose.Types.ObjectId(req.body.category);
        req.body = {id, ...req.body};
        next();
    }catch{
        res.status(404).json({message: "Please try again"})
    }
}

export function validateData(req: Request, res: Response, next: NextFunction) {
    try {
        ProductModel.validate(req.body)
        .then(() => next())
        .catch(() => {
            res.status(400).json({message: "Not enough information, please try again"})    
            return;
        })
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}

export async function checkId(req: Request, res: Response, next: NextFunction) {
    try {
        const check = await ProductModel.findOne({id: req.body.id});
        !check ? res.status(400).json({message: "Not Found Id"}) : next();
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}