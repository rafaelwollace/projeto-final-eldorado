const { Router } = require('express')
const CategoryController = require('../controllers/CategoryController')

const router = Router()

router.get('/category', CategoryController.todasCategory)


module.exports = router