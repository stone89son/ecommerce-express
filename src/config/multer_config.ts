import multer from "multer";

const oldPath = __dirname.split("/")
oldPath.splice(oldPath.length - 2);

const newPath = [...oldPath, "library"].join("/");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, newPath);
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({storage});

export default upload;