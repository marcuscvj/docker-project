/**
 * The starting point of the application.
 *
 * @author John Häggerud
 * @version 1.0.0
 */

const express = require('express')
const app = express()

// code for the redis
let redis = require('redis')

// Using docker name

let client = redis.createClient(process.env.REDIS_URL)

client.on('error', function (err) {
  console.log('Error connecting to redis server' + err)
})

client.on('ready', function () {
  console.log('Redis service is ready')

  // just add some data
  client.set('message', 'Hello from node service, with data from redis :) ')
})

app.use(express.json())
// app.set('redisClient', client)

// routes
app.use('/', require('./routes/homeRouter'))

// catch 404
app.use((req, res, next) => {
  res.status(404)
  res.send()
})

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal Server Error')
})

// listen to provided port
app.listen(4000, () => console.log('Server running on port 4000'))
