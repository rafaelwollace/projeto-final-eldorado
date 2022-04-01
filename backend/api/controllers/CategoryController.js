const database = require('../models')

class CategoryController {

    static async todasCategory(req, res) {
        try {
            const todasCategory = await database.Category.findAll()
            return res.status(200).json(todasCategory)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = CategoryController