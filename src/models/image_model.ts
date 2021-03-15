import mongoose from "../config/mongoose_config";

const schema = new mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number
});

const ImageModel = mongoose.model<mongoose.Document<Express.Multer.File>>("library", schema);

export default ImageModel;

