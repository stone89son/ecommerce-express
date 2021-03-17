import mongoose from "mongoose";
import { inforOrder } from "../order/dto/order_dto";

const schema = new mongoose.Schema<mongoose.Document<inforOrder>>({
    id: String,
    email: String,
    phoneNumber: String,
    address: String,
    note: String,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bills"
    },
    status: String
})

const billModel = mongoose.model<mongoose.Document<inforOrder>>("bills", schema);

export default billModel;