import multer from "multer";

const oldPath: string[] = __dirname.split("/")
oldPath.splice(oldPath.length - 2);

const newPath: string = [...oldPath, "library"].join("/");

const storage : multer.StorageEngine = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, newPath);
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload: multer.Multer = multer({storage});

export default upload;