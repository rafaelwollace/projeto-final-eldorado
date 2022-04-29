
const database = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

class AuthController {

    
   static signIn(req, res) {
 
        let { username, password } = req.body;

        database.User.findOne({ where: {  username: username  } }).then(user => {

            if (!user) {
                res.status(404).json({ msg: "Usuario não encontrado." });
            } else {
                if (bcrypt.compareSync(password, user.password)) {

                    let   token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    res.json({
                        user: user,
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
            username: req.body.username,
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