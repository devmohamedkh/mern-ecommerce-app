const router = require("express").Router();
const cartController = require("../controllers/cartController");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

//CREATE

router.post("/", verifyToken, cartController.createCart);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, cartController.updeteCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, cartController.deleteCart);

//GET USER CART
router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  cartController.getUserCart
);

// GET ALL

router.get("/", verifyTokenAndAdmin, cartController.getAllCarts);

module.exports = router;
