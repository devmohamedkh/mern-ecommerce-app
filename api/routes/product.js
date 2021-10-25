const productController = require("../controllers/productController");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, productController.createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, productController.updeteProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, productController.deleteProduct);

//GET PRODUCT
router.get("/find/:id", productController.getProductByID);

//GET ALL PRODUCTS
router.get("/", productController.getAllProduct);

module.exports = router;
