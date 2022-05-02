const Services = require('../services/Services')
const deviceServices = new Services('Device')

class DeviceController {

  static async read(req, res) {
    try {
      const read = await deviceServices.read()
      return res.status(200).json(read)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async create(req, res) {
    const nwDevice = req.body
    try {
      const create = await deviceServices.create({ Color: req.body.Color,  PartNumber: req.body.PartNumber,  Category_fk: req.body.Category_fk })
      return res.status(200).json(create)
    } catch (err) {
      return  res.status(500).json({
        message: err.errors.map(e => e.message)
      });
    }
  }


  static async delete(req, res) {
    const { id } = req.params
    try {
      await deviceServices.delete(id)
      return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}


module.exports = DeviceController