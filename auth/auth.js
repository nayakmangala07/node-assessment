const AccessRight = require('../models/access-rights/schema');
const { ObjectId } = require('mongodb');
//         CREATE: 10,
//         READ: 20,
//         UPDATE: 30,
//         DELETE: 40
module.exports = {
    authorize: async function (req, res, next) {
        let role = req.user.role;
        const accessRight = await AccessRight.findOne({ _id: new ObjectId(role) });
        const rights = accessRight.rights || [];
        console.log(accessRight)
        if ((req.method == "GET" && !rights.find(x => x == 20)) || (req.method == "POST" && !rights.find(x => x == 10)) ||
            (req.method == "PATCH" || req.method == "PUT" && !rights.find(x => x == 30)) || (req.method == "DELETE" && !rights.find(x => x == 40))) {
            return res.status(401).json({ message: "Not authorized to access endpoint" })
        }
        next();
    }
}
