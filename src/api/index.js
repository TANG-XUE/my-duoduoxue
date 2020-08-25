import * as url from "./config"
import request from "@/utils/request"

export default {

    /*首页图片数据
     * type	int	必须	默认值	1	1首页轮播，2首页中部广告图
     */
    //获取轮播（首页轮播、图片轮播）
    getPicData(params) {
        return request({
            url: url.picUrl,
            data: params
        })
    },
    //首页一级类别
    getTypeList() {
        return request({
            url: url.typelistUrl
        })
    },
    //首页二级类别
    getNtypeList(params) {
        return request({
            url: url.ntypelistUrl,
            data: params
        })
    },
    //获取机构列表
    getschoollist(params) {
        return request({
            url: url.schoollistUlr,
            data: params
        })
    },
    //选择标签tag
    getSelectList() {
        return request({
            url: url.selectListUrl
        })
    },
}