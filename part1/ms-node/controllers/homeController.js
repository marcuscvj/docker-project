/**
 * Auth controller.
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const homeController = {}

const redis = require('redis')
const client = redis.createClient(process.env.REDIS_URL) // creates a new client

/**
 * Handles the login procedure
 */
homeController.rootResponse = (req, res, next) => {
  // Should call the redis server for information

  client.get('message', (error, data) => {
    let result = error ? { message: 'Welcome to the Node service - But the message where not from redis' } : { message: data }
    res.json(result)
  })
}

module.exports = homeController
