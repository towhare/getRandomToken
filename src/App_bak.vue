<template>
  <div class="full-width center-content">
    <div class="ticketShow">
      <div
        v-for="(char,index) in tokenToChar"
        :key="index"
        class="tokenChar"
      >
        {{ char }}
      </div>
    </div>
    <button
      class="btn btnSwitch"
      @click="startSwitch()"
    >
      {{ buttonText }}
    </button>
    <div class="info">
      <div class="phone">
        中奖电话：{{ prize.phone }}
      </div>
      <div class="name">
        中奖姓名：{{ prize.name }}
      </div>
    </div>
    <div class="connection">
      {{ connection.ifSucceed ? '连接成功':'未连接' }}
    </div>
  </div>
</template>

<script>
import * as index from './js/index.js'
import { getRandomToken, getAllToken } from './utils/request'

export default {
  components: {
  },
  data: function () {
    return {
      token: 'ffccdd1100',
      tokenList: [],
      tokenIndex: 0,
      tokenOnChange: false,
      tokenToChar: ['f', 'c', 'e', '3', '5'],
      buttonText: '开始',
      prize: {
        name: '',
        phone: ''
      },
      connection: {
        ifSucceed: false
      }
    }
  },
  watch: {
    token (curValue) {
      this.tokenToChar = curValue.split('')
    }
  },
  mounted: function () {
    this.tokenToChar = this.token.split('')
    getAllToken().then(response => {
      this.tokenList = response.data.tokens
    }).catch(error => {
      console.log('error')
      console.log(error)
    })
  },
  methods: {
    sayHi () {
      index.sendMsg()
    },
    getToken () {
      getRandomToken().then(response => {
        this.token = response.data.token
        this.$set(this.prize, 'name', response.data.name + 'XX')
        this.$set(this.prize, 'phone', response.data.phone + 'xxxxxxxx')
        console.log(this.prize)
      }).catch(error => {
        console.log('error,获取随机token失败')
        console.log(error)
      })
    },
    startSwitch () {
      if (this.tokenOnChange === true) {
        this.stopSwitch()
        return false
      }
      this.tokenOnChange = true
      this.buttonText = '停止'
      this.switchTokens()
    },
    switchTokens () {
      let tokens = this.tokenList
      if (this.tokenOnChange === false) return false
      if (tokens && tokens.length > 0) {
        if (this.tokenIndex < tokens.length) {
          this.tokenIndex++
          if (this.tokenIndex >= tokens.length) {
            this.tokenIndex = 0
          }
          this.token = tokens[this.tokenIndex]
          setTimeout(() => {
            this.switchTokens()
          }, 1000 / 40)
        }
      }
    },
    stopSwitch () {
      if (this.tokenOnChange === false) {
        return false
      }
      getRandomToken().then(response => {
        this.token = response.data.token
        this.prize = {
          name: response.data.name + 'XX',
          phone: response.data.phone + 'xxxxxxxx'
        }
        this.tokenOnChange = false
        this.buttonText = '开始'
      }).catch(error => {
        console.log('error,获取随机token失败')
        console.log(error)
        this.tokenOnChange = false
      })
    }
  }
}

function GetRequest () {
  let url = decodeURI(location.search)
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
    }
  }
  return theRequest
}
</script>

<style lang="scss" scoped>

  .icon{
    width:150px;height:150px;
    display:block;
    margin:0 auto;
    border-radius:50%;
    border:1px solid #ccc;
    background-color: #fff;
  }
  #map{
    background-color: #ffffff;
  }
  body{
    width:100%;
    height:100%;
    position:absolute;
  }
  .center-content{
    margin: 0 0;
    position:absolute;
    top:3rem;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:5rem;
  }
  .ticketShow{
    display: flex;
    align-items:center;
    justify-content: center;
    margin:.2rem auto;
    .tokenChar{
      width:.4rem;
      background-color: #3968C0;
      color:white;
      height:.6rem;
      font-size:.3rem;
      text-align:center;
      line-height:.6rem;
      margin:0 .04rem;
    }
  }
  .btnSwitch{
    display:block;
    width:5.4rem;
    height:.8rem;
    background-color: #73C3FE;
    margin: 0 auto;
    border:none;
    outline:none;
    font-size:.32rem;
    color:white;
    transition: background-color .2s;
    border-radius:.2rem;
    &:hover{
      background-color: #73C3FE;
      cursor:pointer;
    }
    &:active{
      background-color: #73C3FE;
    }
    &:visited{
      background-color: #73C3FE;
    }
  }
  .info{
    width:5.4rem;
    margin:.2rem auto;
    padding:.15rem .4rem;
    background-color: #fff;
    font-size:.26rem;
    line-height: .5rem;
    -webkit-box-shadow: 0 0 .1rem 0 #eeeeee;
    -moz-box-shadow: 0 0 .1rem 0 #eeeeee;
    box-shadow:  0 0 .1rem 0 #eeeeee;
  }
</style>
