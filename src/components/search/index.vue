<template>
    <view class="search">
        <view class="search-icon">
            <uni-icons type="search" size="20"></uni-icons>
        </view>
        <view class="search-wrap">
            深圳古筝培训
        </view>
    </view>
</template>

<script>
import {uniIcons } from '@dcloudio/uni-ui'
export default {
  data() {
    return {

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
.search{
    display: flex;
    height: 70rpx;
	background-color: #f4f4f4;
	border-radius: 35rpx;
    .search-icon{
        display: flex;
        width: 60rpx;
        justify-content: center;
        align-items: center;
    }
    .search-wrap{
        flex: 1;
        display: flex;
        align-items: center;
    }
}
</style>
