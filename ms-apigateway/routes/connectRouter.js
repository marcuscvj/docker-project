/**
 * proxy routes
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'You connected to the API gateway!' })
})

module.exports = router
