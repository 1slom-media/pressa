import { Router } from "express";
import controller from "./controller.js";
import checkToken from "../../middlewares/checkToken.js";
import validation from "../../middlewares/validation.js";

const router = Router();

router.get("/subcategories", controller.GET);
router.get("/subcategories/:subcategoryId", controller.GET);
router.post("/subcategories",checkToken,validation, controller.POST);
router.put("/subcategories/:subcategoryId",checkToken, controller.PUT);
router.delete("/subcategories/:subcategoryId",checkToken, controller.DELETE);





export default router;
