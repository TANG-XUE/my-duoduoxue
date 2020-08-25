<template>
<view class="img-box">
    <view class="img-top">
        <view class="img-sigle" v-for="(item,index) in imgList" :key="index">
            <image :src="item.pic" mode="scaleToFill"></image>
        </view>
    </view>
</view>
</template>

<script>
import api from '@/api/index'
export default {
    name:'HomeImg',
    props:{
        imgList:Array
    }
    
}
</script>

<style lang="scss" scoped>
.img-box{
    padding: 0 30rpx;
    .img-top{
        widows: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .img-sigle{
            margin-top: 20rpx;
            &:nth-child(1),&:nth-child(2){
                width: 335rpx;
                height: 186rpx;
                image{
                    width: 335rpx;
                    height: 186rpx;
                }
            }
            &:nth-child(3),&:nth-child(4),&:nth-child(5){
                width: 214rpx;	
                height: 210rpx;
                image{
                    width: 214rpx;	
                    height: 210rpx;
                }
            }
        }
    }
}
</style>
