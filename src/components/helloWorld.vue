<template>
  <div class="hello">
    hello {{ name }}! keep coding
  </div>
</template>

<script>
import '../css/helloname.css'
export default {
  name: 'HelloWorld',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.hello{
  display:flex;
  justify-content: center;
  align-items:center;
}
</style>
