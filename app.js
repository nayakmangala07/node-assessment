const express = require("express");
const bodyParser = require("body-parser");
require("./loader/loader");
const passport = require('passport');
require('./auth/passport.js');
const { authorize } = require("./auth/auth")

const app = new express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())
const router = require("express").Router();
const userController = require("./controllers/users");
const productController = require("./controllers/products");

router.post('/users/sign-up', userController.signUp);
router.post('/users/login', userController.login);
router.get('/products', passport.authenticate('jwt',{session: false}), authorize, productController.getProducts);
router.post('/products', passport.authenticate('jwt',{session: false}), authorize, productController.addProduct);
router.put('/products', passport.authenticate('jwt',{session: false}), authorize, productController.updateProduct);
router.patch('/products', passport.authenticate('jwt',{session: false}), authorize, productController.updateProduct);
router.delete('/products', passport.authenticate('jwt',{session: false}), authorize, productController.deleteProduct);

app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`);
});