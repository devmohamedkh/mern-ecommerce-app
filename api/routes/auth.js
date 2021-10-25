const router = require("express").Router();
const authController = require("../controllers/authController");
//REGISTER
router.post("/register", authController.signup);

//LOGIN

router.post("/login", authController.ligIn);

module.exports = router;
