const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
//UPDATE
router.put("/:id", verifyTokenAndAuthorization, userController.updateUserData);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, userController.getUserByID);

//GET ALL USER
router.get("/", verifyTokenAndAdmin, userController.getUsers);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, userController.getUserStatus);

module.exports = router;
