<template>
<view class="reach-bottom">
    <slot></slot>
</view>
</template>

<script>
export default {
    name:'ReachBottom',
  data() {
    return {

    }
  },
  methods: {

  },
  //滚动个到底部的事件[后续再封装]
  onReachBottom(){
      console.log('我也是有底线的~')
    //   this.$emit("onReachBottom",'bottom')

  },
  components: {

  }
}
</script>

<style scoped>

</style>
