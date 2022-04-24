
const database = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

class AuthController {

    
   static signIn(req, res) {
 
        let { email, password } = req.body;

        database.User.findOne({ where: {  email: email  } }).then(user => {

            if (!user) {
                res.status(404).json({ msg: "Email não encontrado." });
            } else {
                if (bcrypt.compareSync(password, user.password)) {

                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    res.json({
                        token: token
                    })
                } else {
                    res.status(401).json({ msg: "Senha invalida!" })
                }

            }
        }).catch(err => {
            res.status(500).json(err);
        })
    }
    
    
    static signUp(req, res) {

        // colocando criptografina na senha
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        database.User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {

            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                user: user,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

    }

  

}

module.exports = AuthController