const express = require('express')

const app = express()
app.use(express.static('./'))
  // http服务器
app.listen(3000, () => {
  console.log('the server is running...')
})

const ws = require('ws').Server
const wsServer = new ws({ port: 8888 })
wsServer.on('connection', (socket) => {
  socket.on('message', (message) => {
    // console.log('接收到客户端的消息：' + message)
    let msg = JSON.parse(message)
    if (msg.type == 'login') {
      socket.user = msg.user
    } else {
      wsServer.clients.forEach(item => {
        if (item.user == msg.to) {
          item.send(msg.message)
        }
      })
    }
  })
})