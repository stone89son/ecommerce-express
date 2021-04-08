import mongoose from "../config/mongoose_config";
import CategoryDto from "../category/dto/category_dto";

const schema = new mongoose.Schema({
    name: {type: String, required: true},
})

const CategoryModel = mongoose.model<mongoose.Document<CategoryDto>>("categories", schema);

export default CategoryModel