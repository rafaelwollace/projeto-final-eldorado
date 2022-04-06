const { Router } = require('express')
const CategoryController = require('../controllers/CategoryController')

const router = Router()

router.get('/api/category', CategoryController.read)
router.post('/api/category', CategoryController.create)  

module.exports = router