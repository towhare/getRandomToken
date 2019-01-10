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
    <div class="connection">
      <div
        class="light"
        :class="{ active: connection}"
      />
    </div>
    <div class="ticket">
      <div class="line">
        姓名：{{ prize.name }}
      </div>
      <div class="line">
        电话：{{ prize.phone }}
      </div>
    </div>
    <button
      class="btnStart"
      @click="startSwitch()"
    >
      开始
    </button>
  </div>
</template>

<script>
/* import * as index from './js/index.js'
import { getRandomToken, getAllToken } from './utils/request' */

export default {
  components: {
  },
  data: function () {
    return {
      token: '0000000000',
      tokenList: ['2cc70df3c2',
        'bef7b4cba6',
        'd5bb6fa9e0',
        '33c9529be6',
        '5ffa522028',
        '578269e706',
        '6775c23345',
        'd6a683b795',
        '0f5488fff4',
        'c000bedb4f',
        '8928bebf02',
        '6e9a194cdb',
        'eb2147cfbf',
        'ecab665f8b',
        '3ae816cb2b',
        '87e66cf3a0',
        'f66a080b5a',
        'a3936170b3',
        '63341e6ecb',
        '1869802706',
        'a98a9d1949',
        '7c96cc030e',
        '2fd2871883',
        'a504620d1d',
        'a2374bb553',
        '41f6e3bdc0',
        'c5fa048bfb',
        '2645227579',
        '60e5ffafb0',
        '1479e1f435',
        '63733ad590',
        'a7505372e9',
        '1f0f76d36b',
        '8b9ed4dd3b',
        'e9e9250133',
        'c414d96320',
        '8f346f3ddc',
        'c0ffbc4624',
        '99364342a3',
        'e0bb7411e0',
        '561b7f41cd',
        '697bb3d81b',
        '658a192d16',
        '5bd3efc8b7',
        '28ed3b937f',
        '7528c8b7bc',
        '306b69b600',
        '6a663a5bf2',
        '62283db291',
        '05ba48cb5d',
        '302236b0a9',
        '23cf57c909',
        '43274d9f20',
        '709e79ed23',
        'bf285369b1',
        '4fbf534480',
        '9e4fd5b68e',
        'a16d67274f',
        '55efd12036',
        '3fc2095845',
        'd15cc10d30',
        '6d1b7baf65',
        'c41615d5f8',
        'eb67a661f3',
        'fdd8bd0bf6',
        '0ce8bdd136',
        'ff353292a9',
        'f936394272',
        'ed05c11ed3',
        'e943f8c73a',
        '06366deaf6',
        '4123b8ae9d',
        'b7f5a4267a',
        '33aea1cced',
        'cee85aec8e',
        '374fa8f8e8',
        '1c1ed26aa4',
        '31cb0f2de8',
        '772bd07685',
        '9b740c7820',
        'ffd7c1bbc8',
        'e78c759c09',
        '472e96c642',
        '8e8cfb0e6e',
        '13360a8ebd',
        'd02dfac7ae',
        'a9467ff331',
        '95723a8702',
        '5ef0193cf7',
        '715a4d622f',
        'b2b8c6abc5',
        'add670761b',
        'a41abcc7e2',
        '04973e93c9',
        '589cc63011',
        '60190be0dc',
        'afb05cb644',
        '74a9d36457',
        '2e65f856a5',
        'a936857862',
        '665c78a105',
        '72fc1dff21',
        '1eb99004d1',
        '71f325cba6',
        '651452f381',
        'f048f8031f',
        '489b07a12c',
        '1a39e5f5b4',
        'c69173de58',
        'baf1c998e5',
        '982092d94b',
        'ab7d2891c9',
        '6202958b77',
        '8ea201972f',
        '3231abc1cf',
        '1dec5e582a',
        'a1e9d62fd5',
        '68d9368c31',
        'ec1c01c34f',
        '95f3afd8b5',
        '9c62c9f75a',
        '8fc4162ddb',
        '420db6eb23',
        '15ef542f9a',
        'c3ac478904',
        '7831fad17d',
        '32f1d8b4e6',
        'f3e3c0246d',
        '17b4b285a7',
        'fb61996c9f',
        '977f255add',
        '0cc994071f',
        '175fa50ee2',
        '2f375a2289',
        '8afb8a0364',
        '31eade612d',
        '4f6ebb4410',
        'b4a2012ad1',
        '69b262e350',
        '1ecae17cdc',
        '62c9b35851',
        'fc6c6d5b74',
        '04067ba9ce',
        '072e5b2355',
        '49f4627520',
        '59670a8bea',
        'ffea812d1f',
        '47ff1f5fef',
        '9e2dcc4df5',
        '6591489e5c',
        '4232f5fae4',
        'cb5b8eefa5',
        '2b0eccbfa5',
        '541d4e4329',
        'b26af10105',
        '74a6e364dc',
        'dde16b62ed',
        '87e4e9e330',
        '690e44fdaa',
        '0d4be81e19',
        'f03237f622',
        '56a3e33453',
        'c568b5abc6',
        'feb02df49c',
        '130acb8faf',
        '6758f5fc56',
        '568645baac',
        '30b12c5c35',
        'a844242849',
        '4bfab24a2b',
        'c600262f29',
        '1c3945bc41',
        'f8761b5344',
        '56bd34eaaa',
        '199e8b81a3',
        '44956633d1',
        '55099e7cfd',
        '7964d480d1',
        'a0474b70f0',
        '69301b8271',
        '014ed00064',
        'f609005148',
        '434f3c3591',
        '5e0ff56f77',
        'a71bc4a7c4',
        'aa7b29769a',
        '183e9c3b14',
        'cfeedf7ef0',
        '965e1c839c',
        '71e99f92ab',
        '2406267bf0',
        'd3ca1d9a42',
        '82e8ef3337',
        '4f4a0e38e7',
        '42fef1f6de',
        '938af1d463',
        'c5ca172175',
        '608bca2cb9',
        '4ed1bd8dad',
        'c7d7b63316',
        '93663ca3d4',
        '5e106dd54a',
        '13b0a9e9ff',
        '30981bae45',
        '995030e779',
        '94b3c852fd',
        '8a6f7b978d',
        '446a676914',
        '1365405b93',
        '646bc9caa0',
        '37b6ecae8f',
        'a40824986f',
        '0759b2a9b6',
        '9435528b3c',
        'ae422ede7c',
        'b6e19826b8',
        'ad2d021610',
        'c98ce6b7e4',
        '408f4a8987',
        '4792137c66',
        '3d6124e1f9',
        '0d888af877',
        'e4998ff36a',
        '6a553d47b4',
        '25c53d6b4f',
        'a7940abec7',
        '45048d1db5',
        'b5d53681fb',
        '82d3aacc52',
        'bbd94f29dd',
        'df1b87bfb5',
        'fa1be56123',
        'aa6a3876c6',
        'ffb9e142fa',
        'ffd1ed112b',
        'a5f952e416',
        '96306a5181',
        'de5f1fdb23',
        '269ac5cb42',
        '1f22006465',
        'e1a54a07d8',
        'f29e83acf3',
        '2393172869',
        '041b8e9ebb',
        '54c8cfe9dd',
        '49972aec8d',
        '5585914a07',
        'c07cf0e81a',
        '93a1223f92',
        'd77010d84d',
        'f52cfe2d7f',
        '974a582ab8',
        'c8e18dfd89',
        '3c285dd225',
        '18af83c6e5',
        'bc04742495',
        '12abf54c65',
        '87ef4b88f4',
        '99b0ae6882',
        '991c656ce3',
        'be64e93eba',
        '8461d62826',
        'b2aeb7d46e',
        '50e6c9e954',
        '02f2695340',
        '9c8c8ebb62',
        'ee308794f8',
        'c2803a4102',
        '263d76607e',
        '02e761df48',
        'e95e32cc32',
        'aa98f99e1e',
        'a5e742d780',
        '2cc309e8bb',
        '105d1d1781',
        '2210692f60',
        '129a036b64',
        '09cfa25248',
        '90d74afaf5'],
      tokenIndex: 0,
      tokenOnChange: false,
      tokenToChar: ['f', 'c', 'e', '3', '5'],
      buttonText: '开始',
      prize: {
        name: 'XXX',
        phone: 'XXXXXXXXXXX'
      },
      connection: false
    }
  },
  watch: {
    token (curValue) {
      this.tokenToChar = curValue.split('')
    }
  },
  mounted: function () {
    this.tokenToChar = this.token.split('')
    /* getAllToken().then(response => {
      this.tokenList = response.data.tokens
    }).catch(error => {
      console.log('error')
      console.log(error)
    }) */
    const that = this
    /* index.initSwitchFun(function () {
      that.startSwitch()
    }) */
    /* index.initSwitchConnectFun(function () {
      console.log('控制器连接成功')
      that.connection = true
    })
    index.initDisconnectedFun(function () {
      that.connection = false
    }) */
  },
  methods: {
    sayHi () {
      /* index.sendMsg() */
    },
    getToken () {
      /* getRandomToken().then(response => {
        this.token = response.data.token
        this.$set(this.prize, 'name', response.data.name)
        this.$set(this.prize, 'phone', response.data.phone)
        console.log(this.prize)
      }).catch(error => {
        console.log('error,获取随机token失败')
        console.log(error)
      }) */
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
      /* getRandomToken().then(response => {
        this.token = response.data.token
        this.prize = {
          name: response.data.name,
          phone: response.data.phone
        }
        this.tokenOnChange = false
        // index.sendToken()
        this.buttonText = '开始'
      }).catch(error => {
        console.log('error,获取随机token失败')
        console.log(error)
        this.tokenOnChange = false
      }) */
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
    top:5rem;
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
    margin:.3rem auto;
    .tokenChar{
      width:.5rem;
      background-color: #ffffff;
      color:#d42915;
      height:.8rem;
      font-size:.4rem;
      text-align:center;
      line-height:.8rem;
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
      background-color: #d42915;
      cursor:pointer;
    }
    &:active{
      background-color: #d42915;
    }
    &:visited{
      background-color: #d42915;
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
  .connection{
    position:absolute;
    top:.5rem;
    left:.1rem;
    .light{
      width:.1rem;height:.1rem;
      border-radius:50%;
      background-color: #e44;
      &.active{
        background-color: #4e4;
      }
    }
  }
  .ticket{
    width: 6rem;
    margin: 0 auto;
    color:white;
    text-align:center;
    font-size:.32rem;
    line-height: .6rem;
  }
  .btnStart{
    display:block;
    width:5.4rem;
    height:.8rem;
    background-color: #f6cb58;
    margin: 0 auto;
    border:none;
    outline:none;
    font-size:.32rem;
    color:white;
    transition: background-color .2s;
    border-radius:.2rem;
  }
</style>
