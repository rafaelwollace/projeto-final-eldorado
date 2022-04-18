const { Router } = require('express')
const CategoryController = require('../controllers/CategoryController')
// Middlewares
const auth = require('../middlewares/auth');

const router = Router()

router.get('/api/category', auth,  CategoryController.read)
router.post('/api/category', auth, CategoryController.create)  
router.delete('/api/category/:id', auth, CategoryController.delete)

module.exports = router