const ApiRootUrl = 'https://duoduoxue.thea.cn/api/v1/';

module.exports = {
    //首页轮播
    picUrl: ApiRootUrl + 'getpic',
    //首页一级类别
    typelistUrl: ApiRootUrl + 'typelist',
    //首页二级类别
    ntypelistUrl: ApiRootUrl + 'ntypelist',
    //获取机构列表
    schoollistUlr: ApiRootUrl + 'school/list',
    //选择标签tag
    selectListUrl: ApiRootUrl + 'taglist'
}