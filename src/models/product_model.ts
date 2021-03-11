import mongoose from "../mongoose_config";
import {Product} from "../product/dto/product_dto";

const schema = new mongoose.Schema({
    id: String,
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    name: String,
    price: Number,
    discount: Number,
    images: Array,
    detail: Object,
})

const ProductModel = mongoose.model<mongoose.Document<Product>>("products", schema);

export default ProductModel;