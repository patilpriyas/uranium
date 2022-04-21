const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const middleware = require('../middlewares/commonMiddlewares');



router.post("/createProduct",middleware.headerValidation, productController.createProduct)
router.post("/createNewUser",middleware.headerValidation, UserController.createNewUser)
router.post('/createOrder', middleware.headerValidation, orderController.createOrder);



module.exports = router;