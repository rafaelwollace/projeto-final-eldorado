const { Router } = require('express')
const AuthController = require('../controllers/AuthController')


const router = Router()

router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);



module.exports = router