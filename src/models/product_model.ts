import mongoose from "../config/mongoose_config";
import {Product} from "../product/dto/product_dto";

const schema = new mongoose.Schema({
    id: {type: String, required: false},
    category:{type: mongoose.Schema.Types.ObjectId, ref: "categories"},
    name: {type: String, required: true},
    price: {type: Number, required: false},
    discount: {type: Number, required: false},
    images: [{type: mongoose.Schema.Types.ObjectId, ref: "libraries"}],
    detail: {type: Object, required: false},
})

const ProductModel = mongoose.model<mongoose.Document<Product>>("products", schema);

export default ProductModel;