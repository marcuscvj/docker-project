/**
 * The starting point of the application.
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const express = require('express')
const app = express()
require('dotenv').config()

// Allow CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.json())

/*
* list proxies handle by the API gateway
*/

// Authenticate an user
app.use('/connect', require('./routes/connectRouter'))

app.use('/node', require('./routes/nodeRouter'))
app.use('/go', require('./routes/goRouter'))
app.use('/flask', require('./routes/flaskRouter'))
// catch 404
app.use((req, res, next) => {
  res.status(404)
  res.send()
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json(err.message)
})

// listen to provided port
app.listen(5000, () => console.log('Server running at http://localhost:5000'))
