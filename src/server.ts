import express from "express";
import routerProduct from "./product/controller";
import routerCategory from "./category/controller";
import routerLibrary from "./library/controller";
import routerOder from "./order/controller";

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("library"))

app.use(routerProduct);
app.use(routerCategory);
app.use(routerLibrary);
app.use(routerOder);

app.listen(3000, () => console.log("welcome to"));