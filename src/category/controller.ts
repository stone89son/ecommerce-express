import {Router} from "express";
import * as service from "./service"
const routerCategory: Router = Router();

routerCategory.get("/categories", async (req, res) => {
    const data = await service.getCategory();
    if(!data.err){
        res.status(200).json({categories: data.data});
    }else{res.status(404).json({message: "Please try again"})}
})

routerCategory.post("/categories/addCategory", async (req, res) => {
    const message = await service.createCategory(req.body);
    if(!message.err){
        res.status(200).json({message: "Category is created"})
    }else{res.status(404).json({message: "Please try again"})}
})

routerCategory.put("/categories/updateCategory", async (req, res) => {
    const message = await service.updateCategory(req.body);
    if(!message.err){
        res.status(200).json({message: "Category is updated"})
    }else{res.status(404).json({message: "Please try again"})}
})

routerCategory.delete("/categories/deleteCategory", async (req, res) => {
    const message = await service.deleteCategory(req.body.id);
    if(!message.err){
        res.status(200).json({message: "Category is deleted"})
    }else{res.status(404).json({message: "Please try again"})}
})

export default routerCategory;