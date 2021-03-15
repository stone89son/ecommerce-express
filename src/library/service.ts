import mongoose from "../config/mongoose_config";
import ImageModel from "../models/image_model";
import fs from "fs";

export async function getImage(): Promise<{data?: mongoose.Document<Express.Multer.File>[], err: boolean}> {
    try{
        const data = await ImageModel.find({});
        return {data, err: false};
    }catch{return {err: true}}
}

export async function createImage<T>(data: T): Promise<{err: boolean}> {
    try{
        await ImageModel.insertMany(data);
        return {err: false};
    }catch{return {err: true}}
}

export async function deleteImage(path: string): Promise<{err: boolean}> {
    try{
        await ImageModel.deleteOne({path});
        fs.unlinkSync(path);
        return {err: false}
    }catch{return {err: true}}
}