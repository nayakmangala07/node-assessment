const mongoose = require("mongoose");
const { constants } = require("../../constants");
const { Schema } = mongoose;

const AccessRightSchema = new Schema({
    name: String,
    role: {
        type: Number
    },
    rights: {
        type: Array //Object.values(constants.permisions)
    }
});

module.exports = mongoose.model('AccessRight', AccessRightSchema);