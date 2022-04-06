const { Router } = require('express')
const DeviceController = require('../controllers/DeviceController')

const router = Router()

router.get('/api/device', DeviceController.read)
router.post('/api/device', DeviceController.create)


module.exports = router