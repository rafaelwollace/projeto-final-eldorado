const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acesso não autorizado!" });
    } else {
        let token = req.headers["x-access-token"];


        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Problema com Token", err });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};