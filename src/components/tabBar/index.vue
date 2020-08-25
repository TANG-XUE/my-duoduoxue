<template>
<view class="tabbar">
    <navigator class="btm-li" open-type="reLaunch" url="pages/home/index">
        <text>首页</text>
    </navigator>
     <view class="btm-li">
        <text>电话</text>
    </view>
     <view class="btm-li">
        <text>咨询</text>
    </view>
     <view class="btm-li" open-type="reLaunch" url="pages/mine/index">
        <text>我的</text>
    </view>
</view>
</template>

<script>
import {uniGrid }  from '@dcloudio/uni-ui'
export default {
  data() {
    return {

    }
  },
  methods: {
    
  },
  components: {
    uniGrid  
  }
}
</script>

<style lang="scss" scoped>
.tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750rpx;
	height: 100rpx;
	background-color: #ffffff;
  display: flex;
  align-items:center;
  border-top: 2rpx solid #dddddd;
  .btm-li{
    flex: 1;
    display: flex;
    padding-top: 50rpx;
    align-items:center;
    flex-direction: column;
    background: url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-sy.png) no-repeat center 12rpx;
    background-size: 42rpx auto;
    font-size: 20rpx;
    &:nth-child(1){
      &.active{
        background-image: url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-sy-s.png);
      }
    }
    &:nth-child(2){
      background-image:url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-tel.png);
      &.active{
        background-image: url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-tel-s.png);
      }
    }
    &:nth-child(3){
      background-image: url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-zx.png);
      &.active{
        background-image: url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-zx-s.png);
      }
    }
    &:nth-child(1){
      background-image: url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-my.png);
      &.active{
        background-image: url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/btm-my-s.png);
      }
    }
  }
}
</style>
