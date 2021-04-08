import mongoose from "mongoose";
import { inforOrder } from "../order/dto/order_dto";

const schema = new mongoose.Schema<mongoose.Document<inforOrder>>({
    id: String,
    email: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},
    note: {type: String, required: true},
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    status: String
})

const billModel = mongoose.model<mongoose.Document<inforOrder>>("bills", schema);

export default billModel;