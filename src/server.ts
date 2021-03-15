import express from "express";
import routerProduct from "./product/controller";
import routerCategory from "./category/controller";
import routerLibrary from "./library/controller";
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerProduct);
app.use(routerCategory);
app.use(routerLibrary);

app.listen(3000, () => console.log("welcome to"));