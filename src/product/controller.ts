import {Router} from "express";
import * as service from "./service";
import * as midldeware from "./middleware";
const routerProduct = Router();

routerProduct.get("/product", service.getProduct);

routerProduct.get("/product/detail/:id", 
    midldeware.checkId,
    service.getProductById);

routerProduct.get("/product/category/:category", service.getProductByCategory);

routerProduct.get("/product/pagination/:page", service.getPagination);

routerProduct.post("/product",
    midldeware.validateData,
    midldeware.handleCreateProduct,
    service.createProduct)

routerProduct.put("/product", 
    midldeware.checkId,
    service.updateProduct);

routerProduct.delete("/product", 
    midldeware.checkId,
    service.deleteProduct);

export default routerProduct;