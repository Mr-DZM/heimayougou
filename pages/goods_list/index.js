//Page Object
// 解构的request是函数
import { request } from "../../request/index";
Page({
  data: {
    // 定义导航栏数据
    tabs: [
      { id: 0, title: "综合", isActive: true },
      { id: 1, title: "销量", isActive: false },
      { id: 2, title: "价格", isActive: false }
    ],
    // 页面要渲染的商品数组
    goodsList:[]
  },
  // 全局 接口参数
  queryParams: {
    //  关键字 小米 可以为空字符串
    query: "",
    // 商品分类id
    cid: "",
    // 页码
    pagenum: 1,
    // 页容量/页条数
    pagesize: 10
  },
  // 传递给子组件的自定义事件函数
  handleTitleChange(e) {
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) => (v.isActive = i === index ? true : false));
    this.setData({
      tabs
    });
  },
  //options(Object)
  onLoad: function(options) {
    // console.log(options);
    this.queryParams.cid = options.cid;
    // 调用获取商品列表数据
    this.getGoodsList()
  },
  // 获取商品列表数据
  getGoodsList() {
    request({
      url: "/goods/search",
      data: this.queryParams
    }).then(result=>{
      console.log(result);
      this.setData({
        goodsList:result.goods
      });
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {},
  onPageScroll: function() {},
  //item(index,pagePath,text)
  onTabItemTap: function(item) {}
});
