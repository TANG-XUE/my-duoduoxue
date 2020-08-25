<template>
    <view class="loading">
        <uni-load-more :status="status"></uni-load-more>
    </view>
</template>

<script>
import {uniLoadMore} from '@dcloudio/uni-ui'
export default {
    name:'loading', //数据加载中的组件
    props:{
        status:String
    },
    data() {
        return {
            /*
            loading 的状态，可选值：more（loading前）、loading（loading中）、noMore（没有更多了）


            {contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}
            * */
        }
    },
    methods: {

    },
    components: {
        uniLoadMore
    }
}
</script>

<style scoped>

</style>
