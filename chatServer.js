const express = require('express')
const app = express()
const server = require('http').createServer(app)
const portNumber = 3000
server.listen(portNumber, () => {
  console.log('起動しました', 'http://localhost' + portNumber)
})
//Creat Server

app.use('/public', express.static('./public'))
app.get('/',(req,res) => {
  res.redirect(302, '/public')
  //Acces for root to /public
})
//Return public directory

const socketio = require('socket.io')
const io = socketio.listen(server)
//Start WebSocket server

io.on('connection',(socket) => {
  console.log('Acces to User:', socket.client.id)
  socket.on('chatMessage',(msg) => {
    console.log('message',msg)
    io.emit('chatMessage',mst)
    //Sent to All client
  })
  //Receive Message
})
//Event on Client acces