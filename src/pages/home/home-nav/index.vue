<template>
    <view class="nav">
        <div class="swiper-list">
            <swiper autoplay="true" indicator-dots="true" indicator-color="#e1e1e1" indicator-active-color="#e85b37">
                <swiper-item>
                    <!--一级类别-->
                    <view class="first-list public-list">
                        <view class="sigle-list" v-for="(item,index) in firstList" v-if="index<8" :key="index">
                            <view class="item-icon">
                                <image :src="item.imgUrl" mode="widthFix"></image>
                            </view>
                            <text class="item-text">{{item.type}}</text>
                        </view>
                    </view>
                    <!--二季类别-->
                    <view class="second-list public-list">
                        <view class="sigle-list" v-for="(item,index) in secondList" v-if="index<10" :key="index">
                            <view class="item-icon">
                                <image :src="item.imgUrl" mode="heightFix"></image>
                            </view>
                            <text class="item-text">{{item.ntype}}</text>
                        </view>
                    </view>
                </swiper-item>
                <swiper-item>
                    <!--一级类别-->
                    <view class="first-list public-list">
                        <view class="sigle-list" v-for="(item,index) in firstList" v-if="index>=8" :key="index">
                            <view class="item-icon">
                                <image :src="item.imgUrl" mode="widthFix"></image>
                            </view>
                            <text class="item-text">{{item.type}}</text>
                        </view>
                    </view>
                    <!--二季类别-->
                    <view class="second-list public-list">
                        <view class="sigle-list" v-for="(item,index) in secondList" v-if="index>=10" :key="index">
                            <view class="item-icon">
                                <image :src="item.imgUrl" mode="heightFix"></image>
                            </view>
                            <text class="item-text">{{item.ntype}}</text>
                        </view>
                    </view>
                </swiper-item>
            </swiper>

        </div>
    </view>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'HomeNav',
    computed:{
        ...mapState(["firstList",'secondList']),//一级、二级列表的数据
    },
}
</script>

<style lang="scss" scoped>
.nav{
    padding: 0 30rpx;
    .swiper-list{
        swiper{height: 700rpx;}
        .public-list{
            display: flex;
            justify-content:space-between;
            flex-wrap: wrap;
            .sigle-list{
                margin-top: 40rpx;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .item-icon{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    image{
                        width: 80rpx;
                    }
                }
                .item-text{
                    display: flex;
                    justify-content: center;
                }
            }
            &.first-list{
                .sigle-list{
                    width: 25%;
                    height: 136rpx;
                }
                
            }
            &.second-list{
                .sigle-list{
                    width: 20%;
                    height: 90rpx;
                     .item-icon{
                         image{
                             max-width: 55rpx;
                             height: 48rpx;
                         }
                     }
                }
            }
        }
        
    }
}
</style>
