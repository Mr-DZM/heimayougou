import { request } from "../../request/index.js";
Page({
  data: {
    // 左侧的菜单数组
    leftMenuList: [],
    // 右侧的菜单数组
    rightGoodsList: [],
    // 定义一个起始值
    currentindex:0,
  },
  //options(Object)
  onLoad: function(options) {
    // 获取分类页面的数据
    this.getCategoryList();
  },
  getCategoryList() {
    request({
      url: "/categories"
    }).then(result => {
      // 分析可得我们左侧列表只需要大标题和id即可 过滤取到数据
      // 注意map里面的中阔号() 是简写 相当于 是 { return 数据 }
      let leftMenuList = result.map(v => ({
        cat_id: v.cat_id,
        cat_name: v.cat_name
      }));
      // 先获取第一个大标题大家电的数据
      let rightGoodsList=result[0].children;
      this.setData({
        leftMenuList,
        rightGoodsList
      });
    });
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
