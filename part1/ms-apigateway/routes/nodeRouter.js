/**
 * proxy routes
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const nodeEndpoint = process.env.NODE_ENDPOINT

router.get('/', async (req, res, next) => {
  console.log('In node route')
  console.log('nodeEndpoint -> ' + nodeEndpoint)
  try {
    let response = await fetch(nodeEndpoint)
    let data = await response.json()
    res.json(data)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

module.exports = router
