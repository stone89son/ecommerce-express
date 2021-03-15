import ProductModel from "../models/product_model";
import mongoose from "../config/mongoose_config";
import {Product} from "./dto/product_dto";
import CreateProductDto from "./dto/createProduct_dto";
import updateProductDto from "./dto/updateProduct_dto";

export async function getProduct(): Promise<{data?: mongoose.Document<Product>[], err: boolean}> {
    try{
        const data = await ProductModel.find({}).limit(20);
        return {data, err: false};
    }catch{
        return {err: false};
    }
}

export async function getProductById(id: string): Promise<{data?: mongoose.Document<Product> | null, err: boolean}> {
    try{
        const data = await ProductModel.findOne({id});
        return {data, err: false};
    }catch{
        return {err: true};
    }
}

export async function getProductByCategory(id: string): Promise<{data?: mongoose.Document<Product>[], err: boolean}>{
    try{
        const data = await ProductModel.find({category: mongoose.Types.ObjectId(id)})
        .populate("category");
        return {data, err: false}
    }catch{
        return {err: true}
    }
}
export async function getPagination(index: number): Promise<{data?: mongoose.Document<Product>[], err: boolean}> {
    try{
        const start: number = (index - 1) * 20;
        const end: number = start + 20;
        const data = await ProductModel.find({});
        const result = data.slice(start, end);
        return {data: result, err: false};
    }catch{
        return {err: true}
    }
}

export async function createProduct(data: CreateProductDto): Promise<{err: boolean}> {
    try{
        await ProductModel.create(data);
        return{err: false};
    }catch{
        return {err: true};
    }
}

export async function updateProduct(data: updateProductDto): Promise<{err: boolean}> {
    try{
        const newData = data.field === "category" ? mongoose.Types.ObjectId(data.data): data.data
        await ProductModel.updateOne({id: data.id}, {[data.field]: newData});
        return {err: false};
    }catch{
        return {err: true};
    }
}

export async function deleteProduct(id: string): Promise<{err: boolean}> {
    try{
        await ProductModel.deleteOne({id});
        return {err: false};
    }catch{
        return {err: true};
    }
}