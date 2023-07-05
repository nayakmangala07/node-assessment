const mongoose = require("mongoose");
const { constants } = require("../../constants");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Product', ProductSchema);