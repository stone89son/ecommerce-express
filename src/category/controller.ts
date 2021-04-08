import {Router} from "express";
import * as service from "./service";
import * as middleware from "./middleware";
const routerCategory: Router = Router();

routerCategory.get("/category", service.getCategory);

routerCategory.post("/category", 
    middleware.validateCategory,
    service.createCategory);

routerCategory.put("/category", service.updateCategory);

routerCategory.delete("/category", service.deleteCategory);

export default routerCategory;