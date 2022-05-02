const Services = require('../services/Services')
const categoryServices = new Services('Category')


class CategoryController {

  static async read(req, res) {
    try {
      const read = await categoryServices.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const nwCategory = req.body
    try {
      const newCategory = await categoryServices.create({ Name: req.body.Name })
      return res.status(200).json(newCategory)
    } catch (err) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }

  static async delete(req, res) {
    const { id } = req.params
    try {
      await categoryServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}


module.exports = CategoryController