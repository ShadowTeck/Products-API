const Product = require('../models/Product')

const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json({ product })
}

const getAllProducts = async(req, res) => {
    const products = await Product.find({})
    res.status(200).json({products})
}

const deleteProduct = async (req, res) => {
    const {
        params: { id: productID },
    } = req;

    const product = await Product.findByIdAndRemove({
        _id: productID,
    });
    
    if (!product) {
        throw new NotFoundError(`No Job with the id of ${productID}`);
      }
    
      res.status(StatusCodes.OK).json({ product });
}

//Getting products and data from MONGO DB

module.exports = {
    createProduct,
    getAllProducts
}