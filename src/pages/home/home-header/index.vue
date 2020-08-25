<template>
    <view class="address">
        <text class="address-text">南山区桃源路</text>
        <view class="address-icon">
            <uni-icons :type="type"></uni-icons>
        </view>
    </view>
</template>

<script>
import {uniIcons } from '@dcloudio/uni-ui'
export default {
  name:"HomeHeader",
  data() {
    return {
        type:'arrowdown'
    }
  },
  methods: {

  },
  components: {
    uniIcons
  }
}
</script>

<style lang="scss" scoped>
.address{
    display: flex;
    justify-content: start;
    padding: 0 30rpx;
    .address-text{
        font-size: 30rpx;
        color: #333333;
    }
    .address-icon{
        color: #333333;
    }
}
</style>
