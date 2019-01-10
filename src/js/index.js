import io from './socket.io.js'

let socket = io.connect('http://localhost.com:2002')
let x = 1
export function sendMsg () {
  socket.emit('userMsg', 'hi' + x++)
}
export function sendToken (obj) {
  socket.emit('complete', obj)
}
export function initSwitchFun (callback) {
  socket.on('switchController', callback)
  console.log('监听 switchController:')
  console.log(callback)
}
export function initSwitchConnectFun (callback) {
  socket.on('switchConnect', callback)
  console.log('初始化控制器连接事件')
}
export function initDisconnectedFun (callback) {
  socket.on('controllerDisconnected', callback)
  console.log('控制器断开连接')
}
