/**
 * Token routes
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()

const controller = require('../controllers/homeController')

router.get('/', controller.rootResponse)

module.exports = router
