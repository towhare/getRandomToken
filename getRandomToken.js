'use strict'
let express = require('express')
let app = express()
let socketApp = express()
let SocketServer = require('http').Server(socketApp)
let io = require('socket.io')(SocketServer)
let mysql = require('mysql')
let bodyParser = require('body-parser')
let url = require('url')
io.origins(['http://localhost:8080', 'http://localhost:63342', 'http://localhost:7777', 'http://192.168.201.66:7777', 'http://192.168.201.66:63342'])

SocketServer.listen(2002)

io.on('connection', function (socket) {
  console.log('a user connected')
  socket.broadcast.emit('user connected')
  socket.on('userMsg', function (msg) {
    console.log('message:' + msg)
  })
})
/*
* 用于控制端连接
* */
let adminRoom = io.of('/admin')
adminRoom.on('connection', function (socket) {
  console.log('admin connected')
  io.emit('switchConnect')
  socket.on('userMsg', function (msg) {
    console.log('admin:' + msg)
  })
  socket.on('switch', function (msg) {
    console.log('admin switch!')
    io.emit('switchController')
  })
  socket.on('disconnect', (reason) => {
    console.log('控制器断开连接disconnect' + reason)
    io.emit('controllerDisconnected')
  })
})

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-type,X-Token')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const activity = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'username',
  password: 'password',
  database: 'database'
})

activity.connect()

let tool = {
  getTokens: function (callback) {
    activity.query('SELECT name,phone,token FROM usersignup', function (err, result, fields) {
      if (err) {
        console.log(err)
      } else {
        callback(result)
      }
    })
  }
}

activity.query('SELECT name,phone,token FROM usersignup', function (err, result, fields) {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})

app.get('/getRandomToken', function (req, res) {
  tool.getTokens((result) => {
    if (result.length > 0) {
      const randomIndex = Math.floor(Math.random() * result.length)
      const token = result[randomIndex].token
      const name = result[randomIndex].name.slice(0, 1)
      const phone = result[randomIndex].phone.slice(0, 3)
      res.json({
        code: 200,
        token,
        name,
        phone,
        msg: 'ok'
      })
    } else {
      res.json({
        code: 403,
        msg: '错误'
      })
    }
  })
})
app.get('/getTokenList', function (req, res) {
  try {
    tool.getTokens((result) => {
      if (result.length > 0) {
        let tokenList = []
        for (let i = 0; i < result.length; i++) {
          tokenList.push(result[i].token)
        }
        res.json({
          code: 200,
          tokens: tokenList
        })
      } else {
        res.json({
          code: 403,
          msg: '错误'
        })
      }
    })
  } catch (err) {
    console.log(err)
    res.json({
      code: 404,
      msg: '错误'
    })
  }
})

let server = app.listen(2001, function () {
  const port = server.address().port
  console.log('监听端口： %s', port)
})
