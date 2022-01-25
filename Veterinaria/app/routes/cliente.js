const express = require('express')
const controller = require('../controllers/cliente')
const router = express.Router()
const path = 'cliente'

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