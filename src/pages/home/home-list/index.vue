<template>
<view class="list">
    <comm-list :schollList="schollList">
        <view class="title">
            <view class="tit">为您<text>优选</text></view>
        </view>
    </comm-list>
</view>
</template>

<script>
import CommList from '@/components/list'
import CommLoading from '@/components/loading'

import api from '@/api/index'

export default {
    name:'HomeList',
    data() {
        return {
            schollList:[], //列表list
            params:{
                /*
                    page	int	必须	1	页数
                    size	int	必须	20	每页条数
                    typeid	int	可选	0	一级类
                    ntypeid	int	可选	0	二级类
                    sale	int	可选	0	多选请用下划线表示，如1_2_3,促销：1促销 2送赠品 3限时免费
                    coursetype	int	可选	0	多选请用下划线表示，如1_2_3,课程类型1机构课程,2体验课,3团购
                    tagid	int	可选	0	多选请用下划线表示，如1_2_3,机构标签1学习反馈2一对一3小班......
                    near	int	可选	0	距离多少米
                    order	int	可选	distance	multi综合,hits人气,score得分,distance距离
                    map
                * */
               page:1, //页数
               size:8, //每页条数
               order:"distance"
            }
        }
    },
    mounted(){
        this.getSchoolList()
    },
    methods: {
        async getSchoolList(){
            let {data} = await api.getschoollist(this.params)
            this.schollList = data.data
            console.log(this.schollList)
        },

    },
    //滚动个到底部的事件
    // onReachBottom(){
    //     console.log('我也是有底线的~')
    // },
    components: {
        CommList,
        CommLoading
    }
}
</script>

<style lang="scss" scoped>
.list{
    .title{
        position: relative;
        padding:30rpx 0 30rpx 44rpx;
        font-size: 36rpx;
        font-weight: bold;
        color: #333333;
        .tit{
            &::after{
                position: absolute;
                display: block;
                content: "";
                top: 34rpx;
                left: 0;
                width: 34rpx;
                height: 33rpx;
                background:url(https://img.thea.cn/public/platform/thea/201911/ljq/wx-duoduoxue/static/images/sp.png) no-repeat left center;
                background-position: 0 -25rpx;
                background-size: 500rpx 231rpx;
            }
            text{
                color: #e85b37;
            }
        }
        
    }
}
</style>
