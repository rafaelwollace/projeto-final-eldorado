const Services = require('./Services')
const database = require('../models')

class DeviceServices extends Services {
    constructor() {
        super('Device')
        this.category = new Services('Category')
    }


    async read() {
        return database[this.nameModel].findAll({ include: { model: database.Category,  required: true }})
    }


    
}

module.exports = DeviceServices