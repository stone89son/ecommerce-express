import CategoryModel from "../models/catogory_model"
import ProductModel from "../models/product_model";
import mongoose from "../config/mongoose_config";
import CategoryDto from "./dto/category_dto";
import {Request, Response} from "express";
export async function getCategory(req: Request, res: Response): Promise<void> {
    try{
        const data = await CategoryModel.find({});
        res.status(200).json({data});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}

export async function createCategory(req: Request, res: Response): Promise<void> {
    try{
        await CategoryModel.create(req.body);
        res.status(201).json({message: "Category is created"});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}

export async function updateCategory(req: Request, res: Response): Promise<void> {
    try{
        const {id, name} = req.body;
        await CategoryModel.updateOne({id}, {name});
        res.status(201).json({message: "Category is updated"});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}

export async function deleteCategory(req: Request, res: Response): Promise<void> {
    try{
        await ProductModel.updateMany({category: mongoose.Types.ObjectId(req.body.id)}, {category: null});
        await CategoryModel.findByIdAndDelete(req.body.id);
        res.status(200).json({message: "Category is removed"});
    }catch{
        res.status(500).json({messgae: "Server has problem, please try again"});
    }
}