import {Router} from "express";
import * as service from "./service";
import * as midldeware from "./middleware";
const routerProduct = Router();

routerProduct.get("/product", async (req, res) => {
    const products = await service.getProduct();
    if(!products.err){
        res.status(200).json({products: products.data});
    }else{res.status(404).json({message: "Please try again"})}
})

routerProduct.get("/product/getById/:id", async (req, res) => {
    const product = await service.getProductById(req.params.id);
    if(!product.err){
        res.status(200).json({product: product.data});
    }else{res.status(404).json({message: "Please Try again"})}
})
routerProduct.get("/product/getByCategory/:category", async (req, res) => {
    const products = await service.getProductByCategory(req.params.category);
    if(!products.err){
        res.status(200).json({products: products.data});
    }else{res.status(404).json({message: "Please Try again"})}
})
routerProduct.get("/product/pagination/:page", async (req, res) => {
    const products = await service.getPagination(parseInt(req.params.page));
    if(!products.err){
        res.status(200).json({products: products.data});
    }else{res.status(404).json({message: "Please try again"})}
})
routerProduct.post("/product/addProduct", 
    midldeware.handleCreateProduct,
    async (req, res) => {
        const message = await service.createProduct(req.body);
        if(!message.err){
            res.status(200).json({productCode: req.body.id, message: "Product is created"});
        }else{res.status(404).json({message: "Please try again"})};
    })

routerProduct.put("/product/updateProduct", async (req, res) => {
    const message = await service.updateProduct(req.body);
    if(!message.err){
        res.status(200).json({message: "Product is updated"});
    }else{res.status(404).json({message: "Please try again"})}
})

routerProduct.delete("/product/deleteProduct", async (req, res) => {
    const message = await service.deleteProduct(req.body.id);
    if(!message.err){
        res.status(200).json({message: "Product is deleted"});
    }else{res.status(404).json({message: "Please try again"})}
})

export default routerProduct;