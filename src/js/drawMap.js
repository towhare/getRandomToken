;(function () {
  'use strict'
  var _global, canvas, context
  var plugin = {
    add: function (n1, n2) { return n1 + n2 }, // 加
    drawAPiceOfMap: function () {
    },
    /*
    * function
    * @param id canvas的id值
    * @return 一个canvas元素
    * */
    newCanvas: function (id) {
      var canvasel = document.getElementById(id)
      if (canvasel) {
        canvas = canvasel
        context = canvasel.getContext('2d')
        return canvasel
      } else {
        canvas = document.createElement('canvas')
        context = canvas.getContext('2d')
        return canvas
      }
    },
    /*
    * function
    * @param
    * 用于在特定地点绘制一片地图
    * @param img img 图片对象
    * @param number x 绘制图片的x值
    * @param number y 绘制图片的y值
    * @param width w 宽度
    * @param width h 高度
    * */
    drawATile: function (img, sx, sy, swidth, sheight, x, y, width, height) {
      console.log(context)
      console.log(img)
      context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
    }
  }
  _global = (function () { return this || (0, eval)('this') }())
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = plugin
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return plugin })
  } else {
    !('plugin' in _global) && (_global.plugin = plugin)
  }
}())
