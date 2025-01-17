import express from "express";
import { products } from "../controllers/usercontroller.js";
import { getsingleproduct } from "../controllers/usercontroller.js";

const router = express.Router();

router.route("/products").get(products);
router.route("/product/id").get(getsingleproduct);

export default router;
