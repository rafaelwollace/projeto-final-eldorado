const { Router } = require('express')
const DeviceController = require('../controllers/DeviceController')
// Middlewares
const auth = require('../middlewares/auth');

const router = Router()

router.get('/api/device',auth, DeviceController.read)
router.post('/api/device', DeviceController.create)
router.delete('/api/device/:id', DeviceController.delete)


module.exports = router