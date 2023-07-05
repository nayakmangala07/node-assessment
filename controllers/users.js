const User = require('../models/users/schema');
const AccessRight = require('../models/access-rights/schema');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

module.exports = {
    signUp: async function (req, res) {
        try {
            const accessRight = await AccessRight.findOne({ role: Number(req.body.roleType) });
            let userObj = { ...req.body, role: new ObjectId(accessRight._id) };
            await new User(userObj).save()
            res.status(200).json({ message: "User registered successfully!" })
        } catch (e) {
            res.status(400).json({ error: "Something went wrong!" })
        }
    },
    genToken: user => {
        return jwt.sign({
          iss: 'abcdef',
          sub: user.id,
          iat: new Date().getTime(),
          exp: new Date().setDate(new Date().getDate() + 1)
        }, 'abcdef');
    },
    login: async function (req, res) {
        //check if username and password exists in db, if no send error
        let { username, password } = req.body;
        let foundUser = await User.findOne({ username, password });
        if (!foundUser) {
            return res.status(400).json({ error: 'Please register!' });
        } 
        // Generate JWT token
        const token = jwt.sign({
            iss: process.env.SECRET,
            sub: foundUser.id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
          }, process.env.SECRET);
        return res.status(200).json({ username, token })
    },

    authorize: async function (req, res) {
        let role = req.user.role;
        const accessRight = await AccessRight.findOne({ role: Number(role) });
        console.log(accessRight)
    },
}