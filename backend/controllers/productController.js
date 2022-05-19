const Product = require('../models/productModel');
const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products, count: products.length });
};

//Update Product

const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: 'Product not found',
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    FindAndModify: false,
  });
  return res.status(200).json({ success: true, product });
};

// Delete Product

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: `Product with this ${id} not found!` });
  }
  res.status(200).json({ success: true, product });
};

//Get Product By Id
const getProductDetails = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: `Product with this ${id} not found!` });
  }
  res.status(200).json({ success: true, product });
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
};
