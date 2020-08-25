<template>
    <view class="banner">
        <swiper autoplay="true" indicator-dots="true" indicator-color="white" indicator-active-color="#e85b37">
            <swiper-item v-for="(item,index) in bannerList" :key="index">
                <image :src="item.pic" mode="widthFix"></image>
            </swiper-item>
        </swiper>
    </view>
</template>
<script>
export default {
  name:"HomeBanner",
  props:{
    bannerList:Array
  },
}
</script>

<style lang="scss" scoped>
.banner{
  width: 100%;
	height: 260rpx;
  margin-top: 30rpx;
  border-radius: 20rpx;
  padding: 0 30rpx;
  swiper{
    height: 100%;
  }
}
</style>
