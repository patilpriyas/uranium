const ProductModel = require("../models/productModel");


const createProduct = async (req, res) => {
    const getProductData = req.body;
  
    const showData = await Product.create(getProductData);
    res.send({ data: showData, status: true});
  }
  

module.exports.createProduct = createProduct