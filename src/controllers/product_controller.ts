const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const { name, price, amount } = req.body;
    const product = await Product.create({ name, price, amount });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o produto." });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os produtos." });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado." });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o produto." });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, amount } = req.body;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado." });

    await product.update({ name, price, amount });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o produto." });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado." });

    await product.destroy();
    res.json({ message: "Produto excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o produto." });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
