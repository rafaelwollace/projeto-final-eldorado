const { Router } = require('express')
const CategoryController = require('../controllers/CategoryController')
// Middlewares
const auth = require('../middlewares/auth');

const router = Router()

router.get('/api/category', CategoryController.read)
router.post('/api/category', CategoryController.create)  
router.delete('/api/category/:id', CategoryController.delete)

module.exports = router