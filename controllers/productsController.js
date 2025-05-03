const productsModel = require('../models/productsModel');

const getAllProducts = async (req, res) => {
  try {
    // Logic to get all products
    const products = await productsModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    // Logic to get product by id
    const product = await productsModel.getProductById(id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({message : "Product not found"});
    }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    // Logic to create product
    const productData = req.body;
    const product = await productsModel.createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    // Logic to update product
    const product = await productsModel.updateProduct(id,productData);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productsModel.deleteProduct(id);
    res.status(200).json({message : "Product deleted"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
