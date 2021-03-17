import {inforOrder} from "./dto/order_dto";
import billModel from "../models/bill_model";
import mongoose from "../config/mongoose_config";
import { updateStatusDto } from "./dto/updateStatus_dto";

export async function getBills(): Promise<{data?: mongoose.Document<inforOrder>[],err: boolean}>{
    try{
        const data = await billModel.find({});
        return {data, err: false};
    }catch{
        return {err: true};
    }
}

export async function getDetailBills(id: string): Promise<{data?: mongoose.Document<inforOrder> | null, err: boolean}>{
    try{
        const data = await billModel.findById(id).populate("product");
        return {data, err: false};
    }catch{
        return {err: true}
    }
}
export async function createBill(data: inforOrder): Promise<{err: boolean}> {
    try{
        await billModel.create(data);
        return {err: false};
    }catch{
        return {err: true};
    }
}
export async function updateStatus(data: updateStatusDto): Promise<{err: boolean}> {
    try{
        await billModel.updateOne({id: data}, {status: data.status});
        return {err: false};
    }catch{
        return {err: true};
    }
}
export async function cancelBill(id: string): Promise<{err: boolean}>{
    try{
        await billModel.findByIdAndDelete(id);
        return {err: false};
    }
    catch{
        return {err: true};
    }
}  
