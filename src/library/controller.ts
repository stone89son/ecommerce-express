import {Router} from "express";
import mongoose from "../config/mongoose_config";
import upload from "../config/multer_config";
import * as service from "./service";

const routerLibrary: Router = Router();

routerLibrary.get("/library", async (req, res) => {
    const message = await service.getImage();
    if(!message.err){
        res.status(200).json({images: message.data});
    }else{res.status(500).json({message: "Server has problem, please try again"})}
})
routerLibrary.post("/library/addImages",
    upload.array("images"),
    async (req, res) => {
        const message = await service.createImage<Express.Multer.File[] | {[fieldname: string]: Express.Multer.File[]}>(req.files);
        if(!message.err){
            res.status(200).json({message: "Images is create"});
        }else {res.status(500).json({message: "Server has problem, please try again"})}
    }
)
routerLibrary.delete("/library/deleteImage", async (req, res) => {
    const message = await service.deleteImage(req.body.path);
    if(!message.err){
        res.status(200).json({message: "Image is deleteed"});
    }
    else{res.status(500).json({message: "Server has problem, please try again"})}
})
export default routerLibrary;