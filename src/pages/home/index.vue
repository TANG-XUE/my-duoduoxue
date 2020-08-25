<template>
<view class="home" v-if="schollList">
    <div class="header">
      <home-header></home-header>
      <view class="search">
        <search></search>
      </view>
    </div>
    <home-banner :bannerList="bannerList"></home-banner>
    <home-nav></home-nav>
    <home-img></home-img>
    
    <comm-list class="comm-list" :schollList="schollList" :secondList="secondList" :status="status" @scrollTop="scrollToTop">
        <view class="title">
            <view class="tit">为您<text>优选</text></view>
        </view>
    </comm-list>
    <view class="mask" v-show="maskShow">
      
    </view>
</view>
</template>

<script>
import CommList from '@/components/list'
import Search from '@/components/search/index'
import ReachBottom from '@/components/ReachBottom/index'

import HomeHeader from './home-header/index'
import HomeBanner from './home-banner/index'
import HomeNav from './home-nav/index'
import HomeImg from './home-img/index'

import api from '@/api/index'
import navData from '@/static/js/navData.js'

import {mapActions,mapState} from 'vuex'

export default {
  name:"Home",
  data() {
    return {
      maskShow:false,
      bannerList:[],//bannerList
      bannerListParams:{ //获取banner的参数
        type:1
      },
      secondParams:{ //二级列表参数
          typeid:0,
          hot:1
      },
      imgList:[], //首页中间的大图
      imgListParams:{    //首页中间的大图的参数
          type:2
      },
      schollList:[], //列表list
      schoolParams:{
          page:1, //页数
          size:8, //每页条数
          order:"distance" //	默认 distance	multi综合,hits人气,score得分,
      },
      status:'loading',//底部加载状态
      hasMore:true,//是否还有下一页
    }
  },
  mounted(){
      this.getBannerList()
      this.getTypeListIn()
      this.getImgList()
      this.getSchoolList()
  },
  methods:{
    ...mapActions(['getTypeList','getNtypeList']), //一级、二级列表的数据的方法

    //获取banner数据
    async getBannerList(){
      let {data} = await api.getPicData(this.bannerListParams)
      this.bannerList = data;
    },
    //获取一级和二级列表数据（通过vuex获得）
    getTypeListIn(){
        //一级列表
        this.getTypeList()
        //二级列表
        this.getNtypeList(this.secondParams)
        //筛选中的tag
        // this.getSelectList()
    },
    //获取首页图片广告图
    async getImgList(){
        let {data} = await api.getPicData(this.imgListParams);
        this.imgList = data;
        // console.log(data)
    },
    //获取机构数据
    async getSchoolList(){
        let {data} = await api.getschoollist(this.schoolParams)
        if(data.data.length===0){
          this.hasMore = false; //当没有数据了把还有更多状态设置为false
          this.status = 'noMore' //修改loading组件的状态
          uni.showToast({
            title: '没有更多数据了',
            icon: 'none'
          });
          return ;
        }
         this.schollList = [...this.schollList,...data.data];
        // console.log(this.schollList)
    },
    //分页获取下一页的数据
    getNextPage(){
      if(this.hasMore){
        this.schoolParams.page ++; //显示第几页的数据
        this.getSchoolList() //重新发送请求
      }else{
          this.status = 'noMore' //修改loading组件的状态
          uni.showToast({
            title: '没有更多了',
            icon: 'none'
        } );
      }
    },
    //滚动到相应的地方
    scrollToTop(val){
        this.maskShow = true;
        uni.createSelectorQuery().select(".comm-list").boundingClientRect(data=>{//目标节点
        　　uni.createSelectorQuery().select(".home").boundingClientRect((res)=>{//最外层盒子节点
        　　　　uni.pageScrollTo({
        　　　　　　duration:100,//过渡时间必须为0，uniapp bug，否则运行到手机会报错
        　　　　　　scrollTop:data.top - res.top+10,//滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
        　　　　})

        　　}).exec()
        }).exec();
    },
  },
  //滚动个到底部的事件
  onReachBottom(){
     this.getNextPage()
  },
  components: {
    Search,
    HomeHeader,
    HomeBanner,
    HomeNav,
    HomeImg,
    ReachBottom,
    CommList
  }
}
</script>

<style lang="scss" scoped>
.home{
  margin-top: 30rpx;
  .header{
    display: flex;
    height: 70rpx;
    padding: 20rpx 0;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    .search{flex: 1;margin-left: 20rpx;}
  }
  .title{
        position: relative;
        z-index: 2;
        padding:30rpx 30rpx 30rpx 74rpx;
        font-size: 36rpx;
        font-weight: bold;
        color: #333333;
        background-color: #FFFFFF;
        .tit{
            &::after{
                position: absolute;
                display: block;
                content: "";
                top: 34rpx;
                left: 30rpx;
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
    .mask{
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1;
    }
}
</style>
