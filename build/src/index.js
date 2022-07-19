"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./Services/app");
const CreateProductController_1 = require("./Controller/CreateProductController");
const createProduct = new CreateProductController_1.CreateProduct();
app_1.app.post("/produts", createProduct.createProduct);
