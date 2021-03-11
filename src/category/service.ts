import CategoryModel from "../models/catogory_model"
import ProductModel from "../models/product_model";
import mongoose from "../mongoose_config";
import CategoryDto from "./dto/category_dto";

export async function getCategory(): Promise<{data?: mongoose.Document<CategoryDto>[], err: boolean}> {
    try{
        const categories = await CategoryModel.find({});
        return {data: categories, err: false};
    }catch{return {err: true}}
}

export async function createCategory(data: {name: string}): Promise<{err: boolean}> {
    try{
        await CategoryModel.create(data);
        return {err: false};
    }catch{return {err: true}}
}

export async function updateCategory(data: {id: string, name: string}): Promise<{err: boolean}> {
    try{
        await CategoryModel.findByIdAndUpdate(data.id, {name: data.name});
        return {err: false}
    }catch{return {err: true}}
}

export async function deleteCategory(id: string): Promise<{err: boolean}> {
    try{
        await ProductModel.updateMany({category: mongoose.Types.ObjectId(id)}, {category: null});
        await CategoryModel.findByIdAndDelete(id);
        return {err: false};
    }catch{return {err: true}}
}