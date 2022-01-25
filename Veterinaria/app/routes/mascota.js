const express = require('express')
const controller = require('../controllers/mascota')
const router = express.Router()
const path = 'mascota'

/**Ruta: /user GET */
router.get(
    `/${path}`,
    controller.getData
)

/**Ruta: /user POST */
router.post(
    `/${path}`,
    controller.insertData
)

router.put(
    `/${path}/:id`,
    controller.updateSingle
)

router.delete(
    `/${path}/:id`,
    controller.deleteSingle
)

module.exports = router