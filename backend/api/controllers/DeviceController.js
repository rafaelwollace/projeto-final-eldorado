const database = require('../models')

class DeviceController {

    static async read(req, res) {
        try {
            const read = await database.Device.findAll()
            return res.status(200).json(read)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async create(req, res) {  
        const nwDevice = req.body
        try {
          const create = await database.Device.create(nwDevice)
          return res.status(200).json(create)
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
   
    static async delete(req, res) {
        const { id } = req.params
        try {
          await database.Device.destroy({ where: { id: Number(id) }})
          return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!` })
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }
}


module.exports = DeviceController