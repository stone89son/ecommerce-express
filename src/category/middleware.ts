import {Request, Response, NextFunction} from "express";
import CategoryModel from "../models/catogory_model";

export function validateCategory(req: Request, res: Response, next: NextFunction) {
    try{
        CategoryModel.validate(req.body)
        .then(() => next())
        .catch(() => {
            res.status(400).json({message: "Not enough information, please try again"})
        })
    }catch{
        res.status(500).json({message: "Server has proble, please try again"})
    }
}