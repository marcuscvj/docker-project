/**
 * proxy routes
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const goEndpoint = process.env.GO_ENDPOINT

router.get('/', async (req, res, next) => {
  try {
    let response = await fetch(goEndpoint)
    let data = await response.json()
    res.json(data)
  } catch (error) {
    next(new Error('Failed to call endpoint...'))
  }
})

module.exports = router
