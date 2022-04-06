const database = require('../models')

class CategoryController {

    static async read(req, res) {
        try {
            const read = await database.Category.findAll()
            return res.status(200).json(read)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        const nwCategory = req.body
        try {
          const newCategory = await database.Category.create(nwCategory)
          return res.status(200).json(newCategory)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}


module.exports = CategoryController