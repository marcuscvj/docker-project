/**
 * Auth controller.
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const connectController = {}

/**
 * Handles the login procedure
 */
connectController.connect = (req, res, next) => {
  // Send this to token service
  res.json({ message: 'You connected to the API gateway!' })
}

module.exports = connectController
