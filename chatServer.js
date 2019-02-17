const express = require('express')
const app = express()
const server = require('http').createServer(app)
const portNumber = 3000
server.listen(portNumber, () => {
  console.log('起動しました', 'http://localhost' + portNumber)
})

app.use('/public', express.static('./public'))
app.get('/',(req,res) => {
  res.redirect(302, '/public')
})

const socketio = require('socket.io')
const io = socketio.listen(server)

io.on('connection',(socket) => {
  console.log('Acces to User:', socket.client.id)
  socket.on('chatMessage',(msg) => {
    console.log('message',msg)
    io.emit('chatMessage',mst)
  })
})