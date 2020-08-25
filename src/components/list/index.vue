<template>
    <view class="list">
        <slot></slot>
        <view class="select-box">
            <view class="select-tag">
                <view class="tag-sigle" v-for="(item,index) in tagList" :key="index" @click="toglleTag(index)">
                    <text class="tag-name">{{item.name}}</text>
                    <uni-icons class="tag-icon" :type="iconType" size="10"></uni-icons>
                </view>
            </view>
            
            <view class="select-list" v-if="showIndex!=-1">
                <!--类别-->
                <view class="select-details" v-if="showIndex===0">
                    <scroll-view scroll-y class="scroll-first">
                        <view class="first-name" :class="{active:item.type===classToggle}" v-for="(item,index) in firstList" :key="index" @click="toggleCategory(item)">
                            {{item.type}}
                        </view>
                    </scroll-view>
                    <scroll-view scroll-y class="scroll-second">
                        <view class="scroll-name" v-for="(item,index) in secondList" :key="index">
                            <text class="name-left">{{item.ntype}}</text>
                            <text class="num"></text>
                        </view>
                    </scroll-view>
                </view>
                <!--距离-->
                <view class="select-details" v-if="showIndex===1">
                    <scroll-view scroll-y class="scroll-first">
                        <view class="first-name" :class="{active:key===classToggle}" v-for="(item,key) in selectList.streetarr" :key="key" @click="toggleCity(key)">
                            {{key}}
                        </view>
                    </scroll-view>
                    <scroll-view scroll-y class="scroll-second">
                        <view class="scroll-name" v-for="(item,index) in streetList" :key="index">
                            <text class="name-left">{{item.street || item.name}}</text>
                            <text class="num"></text>
                        </view>
                    </scroll-view>
                </view>
                <!--综合-->
                <view class="select-other" v-if="showIndex===2">
                    <view class="details-tag">评分最高</view>
                    <view class="details-tag">距离最近</view>
                    <view class="details-tag">人气最高</view>
                </view>
                <!--全部筛选-->
                <view class="select-other" v-if="showIndex===3">
                    <view class="select-all">
                        <view class="all-name">
                            优惠活动
                        </view>
                        <view class="all-details">
                            <view class="all-tag">
                                促销打折
                            </view><view class="all-tag">
                                促销打折
                            </view><view class="all-tag">
                                促销打折
                            </view>
                        </view>
                    </view>
                    <view class="all-btn">
                        <view class="all-reset">
                            重置
                        </view>
                        <view class="all-selected">
                            已选（0）
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="school-wrap">
            <view class="school-sigle" v-for="(item,index) in schollList" :key="index">
                <view class="school-top">
                    <view class="sigle-left">
                        <image :src="item.logo" mode="aspectFit"></image>
                    </view>
                    <view class="sigle-right">
                        <text class="sigle-title">{{item.schoolname}}</text>
                        <view class="sigle-center">
                            <view class="sigle-grade">
                                <view class="star">
                                   <uni-rate :size="10" :readonly="true" :value="item.score"/>
                                </view>
                                <text class="score">{{item.score|scoreFix}}分</text>
                            </view>
                            <!-- <view class="sigle-tag">
                                <view class="tag-btn">连锁认证</view>
                            </view> -->
                        </view>
                        <view class="address">
                            <view class="area">
                                <text class="area-name">南头</text> ｜
                                <text class="subject" v-for="(sub,index) in item.ntypearr" :key="index" v-show="index<2">{{sub.ntypename}}</text>
                            </view>
                            <text class="distance">
                                3.5km
                            </text>
                        </view>
                        <view class="sigle-type">
                            <view class="type-name" v-for="(tag,index) in item.tagarr" :key="index">
                                {{tag.tagname}}
                            </view>
                        </view>
                    </view>
                </view>
                <view class="school-bottom">
                    <view class="course" v-for="(course,index) in item.courselist" :key="index">
                        <text class="course-tag">
                            团
                        </text>
                        <text class="course-name">
                            {{course.title}}
                        </text>
                        <text class="course-price">
                            ¥ {{course.price}}
                        </text>
                    </view>
                </view>
            </view>
        </view>
        <comm-loading :status="status"></comm-loading>
    </view>
</template>

<script>
import {uniIcons,uniRate} from '@dcloudio/uni-ui'
import CommLoading from '@/components/loading'

import {mapState,mapActions} from 'vuex'

export default {
    /*
        此组件是机构列表的筛选
    */
    name:'public-list',
    props:{
        schollList:Array,
        status:String,
    },
    data() {
        return {
            iconType:'arrowdown',  //点击类别切换的icon类名
            tagList:[], //点击的tag
            typeList:[],
            streetList:[],
            selectIsShow:false,
            showIndex:-1,
            tagIndex:0,
            classToggle:''
        }
    },
    computed:{
        ...mapState(["firstList",'secondList','selectList']),//一级、二级列表的数据
    },
    mounted(){
        this.tagList = this.$store.state.selectTagList;
        this.getSelectData()
    },
    methods: {
        ...mapActions(['getSelectList','getNtypeList']),
        getSelectData(){
            this.getSelectList().then(()=>{
                
            })
        },
        //选择筛选大类别（距离、类别、综合、全部筛选）
        toglleTag(index){
            this.showIndex = index;
            this.$emit("scrollTop",index)
        },
        //类别的点击
        toggleCategory(value){
            this.classToggle = value.type
            let params = {
                typeid :value.id,
                hot:0
            }
            this.getNtypeList(params)
            console.log()
        },
        //地里位置选择
        toggleCity(key,index){
            console.log(index)
            this.classToggle = key
            this.streetList= this.selectList.streetarr[key]
        }
        
    },
    filters:{
        //保留一位小数
        scoreFix(val){
            return val.toFixed(1)
        }
    },
    watch: {
        selectList(){
            console.log(this.selectList)
            // for (var a in this.selectList.streetarr) {    
            //     console.log(a);          /*属性名*/    
            //     console.log(this.selectList.streetarr[a]);    /*属性值*/
            // };
            this.selectList.streetarr = Object.assign({附近:this.selectList.neararr},this.selectList.streetarr)


            console.log(this.selectList)
        }
    },
    components: {
        uniIcons,
        CommLoading,
        uniRate
    }
}
</script>

<style lang="scss" scoped>
.list{
    .select-box{
        position: relative;
        z-index: 2;
        background-color: #FFFFFF;
        position: relative;
        .select-tag{
            padding: 0 30rpx;
            display: flex;
            border-bottom: 1rpx solid #f4f4f4;
            .tag-sigle{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60rpx;
                line-height: 60rpx;
                .tag-name{
                    font-size: 28rpx;
                    color: #333333;
                }
                .tag-icon{
                    font-size: 10rpx;
                    display: flex;
                    align-items: center;
                }
            }
        }
        .select-list{
            position: absolute;
            z-index: 2;
            width: 100vw;
            height: calc(100vh - 170rpx);
            left: 0;
            top: 100%;
            background-color: #FFFFFF;
            border-top: 2rpx solid #f0f0f0;
            .select-details{
                position: relative;
                display: flex;
                justify-content: start;
                height: 100%;
                .scroll-first{
                    width: 33.33%;
                    height: 100%;
                    padding:20rpx 0;
                    background-color: #f6f6f6;
                    .first-name{
                        width: 100%;
                        height: 86rpx;
                        line-height: 86rpx;
                        text-align: center;
                        font-size: 30rpx;
                        color: #333333;
                        &.active{
                            color: #e85b37;
                            border-left: 4rpx solid #e85b37;
                            background-color: #ffffff;
                        }
                    }
                }
                .scroll-second{
                    flex: 1;
                    height: 100%;
                    padding:20rpx 0;
                    background-color: #ffffff;
                    .scroll-name{
                        position: relative;
                        width: 100%;
                        height: 62rpx;
                        line-height: 62rpx;
                        padding: 0 40rpx;
                        text-align: left;
                        font-size: 28rpx;
                        color: #666;
                        &.active{
                            color: #e85b37;
                        }
                        .num{
                            position: relative;
                            right: 0;
                        }
                    }
                }
               
            }
            .select-other{
                position: relative;
                height: 100%;
                .details-tag{
                    width: 100%;
                    padding: 0 30rpx;
                    line-height: 86rpx;
                    font-size: 30rpx;
                    color: #999;
                }
                .select-all{
                    padding: 0 30rpx;
                    font-size: 28rpx;
                    .all-name{
                        line-height: 74rpx;
                    }
                    .all-details{
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        .all-tag{
                            width: 224rpx;
                            height: 72rpx;
                            line-height: 72rpx;
                            text-align: center;
                            background-color: #f9f9f9;
                            margin-bottom: 8rpx;
                            color: #999;
                            &.active{
                                color: #e85b37;
                                background-color: #faded7;
                            }
                        }   
                    }
                }
                .all-btn{
                    width: 100vw;
                    height: 100rpx;
                    position: absolute;
                    display: flex;
                    bottom: 0;
                    left: 0;
                    .all-reset,.all-selected{
                        flex: 1;
                        height: 88rpx;
                        line-height: 88rpx;
                        text-align: center;
                        font-size: 36rpx;
                    }
                    .all-reset{
                        color: #666666;
                        background-color: #f9f9f9;
                        border: solid 2rpx #e9e9e9;
                        border-left: none;
                    }
                    .all-selected{
                        color: #FFFFFF;
                        background-color: #e85b37;
                    }
                }
            }
        }
    }
    .school-wrap {
        padding: 0 30rpx;
        .school-sigle {
            padding: 24rpx 0;
            border-bottom: 20rpx solid #f4f4f4;
            .school-top {
                display: flex;
                padding-bottom: 20rpx;
                border-bottom: 1rpx dashed #dddddd;
                .sigle-left {
                    width: 190rpx;
	                height: 190rpx;
                    margin-right: 19rpx;
                    image {
                        width: 190rpx;
                        height: 190rpx;
                    }
                }
                .sigle-right {
                    flex: 1;
                    .sigle-title {
                        font-size: 34rpx;
                        color: #333333;
                        font-weight: bold;
                    }
                    .sigle-center {
                        display: flex;
                        justify-content: space-between;
                        margin: 20rpx 0;
                        .sigle-grade {
                            display: flex;
                            justify-content: start;
                            .star {
                                margin-right: 20rpx;
                            }
                            .score {
                                font-size: 26rpx;
                                color: #333333;
                            }
                        }
                        .sigle-tag {
                            .tag-btn {
                                width: 106rpx;
                                height: 36rpx;
                                line-height: 36rpx;
                                text-align: center;
                                font-size: 22rpx;
                                color: #ffffff;
                                background-image: linear-gradient(90deg, #a6dca0 0%, #61cd78 100%);
                                border-radius: 4px;
                                &:nth-child(1){
                                    background-image: linear-gradient(90deg, #ddc395 0%, #c5a771 100%);
                                }
                            }
                        }
                    }
                    .address {
                        display: flex;
                        justify-content: space-between;
                        color: #999999;
                        .area {
                            .area-name {
                                font-size: 26rpx;
                                color: #666666;
                                margin-right: 6rpx;
                            }
                            .subject {
                                margin-left: 6rpx;
                                color: #999999;
                            }
                        }
                        .distance {
                            font-size: 26rpx;
                            color: #999999;
                        }
                    }
                    .sigle-type {
                        display: flex;
                        justify-self: start;
                        margin-top: 20rpx;
                        .type-name {
                            margin-right: 8rpx;
                            height: 44rpx;
                            line-height: 44rpx;
                            padding:0 10rpx;
                            font-size: 22rpx;
                            color: #e85b37;
                            border: solid 1rpx #e85b37;
                            &:last-child{
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
            .school-bottom {
                .course {
                    display: flex;
                    justify-self: start;
                    align-items: center;
                    margin-top: 20rpx;
                    position: relative;
                    .course-tag {
                        width: 32rpx;
                        height: 32rpx;
                        margin-right: 11rpx;
                        line-height: 32rpx;
                        text-align: center;
                        font-size: 22rpx;
                        color: #ffffff;
                        background-color: #e85b37;
                        border-radius: 6rpx;
                    }
                    .course-name {
                        font-size: 26rpx;
                        color: #666666;
                    }
                    .course-price {
                        position: absolute;
                        right: 0;
                        font-size: 26rpx;
                        color: #e85b37;
                    }
                    &:nth-child(2){
                        .course-tag {
                            background-color: #fdab33;
                        }
                        .course-price {
                            color: #fdab33;
                        } 
                    }
                }
            }
        }
    }
}
</style>
