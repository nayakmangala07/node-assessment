const Product = require('../models/products/schema');
// const AccessRight = require('../models/access-rights/schema');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
module.exports = {
    getProducts: async function (req, res) {
        try {
            // let products = await Product.find({});
            res.status(200).json({ message: "Products sent successfully" })
        } catch (e) {
            res.status(400).json({ error: "Something went wrong!" })
        }
    },
    addProduct: async function (req, res) {
        try {
            res.status(201).json({ message: "Product added successfully" })
        } catch (e) {
            res.status(400).json({ error: "Something went wrong!" })
        }
    },
    updateProduct: async function (req, res) {
        try {
            res.status(200).json({ message: "Product updated successfully" })
        } catch (e) {
            res.status(400).json({ error: "Something went wrong!" })
        }
    },
    deleteProduct: async function (req, res) {
        try {
            res.status(200).json({ message: "Product deleted successfully" })
        } catch (e) {
            res.status(400).json({ error: "Something went wrong!" })
        }
    }
}