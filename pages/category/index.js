import { request } from "../../request/index.js";
Page({
  // 重点 如果是wxml视图层需要使用数据就必须在data里定义数据
  data: {
    // 左侧的菜单数组
    leftMenuList: [],
    // 右侧的菜单数组
    rightGoodsList: [],
    // 定义一个起始值
    currentindex: 0,
    // 定义竖向滚动条的位置
    scrolltop: 0
  },
  // 定义一个全局变量接收接口的返回值跟data同层级
  // 重点 如果这些数据不需要在页面中渲染， 那么就没有必要放到data中 ，因为小程序中会对data的数据进行传输 传输到视图层也就是wxml 会造成数据多卡顿
  Cates: [],
  onLoad: function(options) {
    // 获取分类页面的数据
    // 发送请求数据之前判断有没有 本地存储旧数据 也称缓存数据
    let cates = wx.getStorageSync("cates");
    if (!cates) {
      // 没有数据时 请求数据
      this.getCategoryList();
    } else {
      // 有数据时判断一下 数据是否过期  过期了的话 用户就无法看到新的数据了
      // Date.now()获取的是时间戳 也就是毫秒
      if (Date.now() - cates.tiem > 1000 * 20) {
        console.log("过期了我重新请求数据了");
        // 过期了 重新请求数据
        this.getCategoryList();
      } else {
        // 数据没有过期 直接赋值 使用
        this.Cates = cates.data;
        this.handleOneload()
      }
    }
  },
  // 获取分类页面的数据
  getCategoryList() {
    request({
      url: "/categories"
    }).then(result => {
      // 获取数据后把数据存到全局变量中 其它地方通过全局变量使用数据
      this.Cates = result;
      // 把请求的数据存储到本地 
      wx.setStorageSync("cates", { data: result, tiem: Date.now() });
      // 调用一次加载的数据
      this.handleOneload();
    });
  },
  // 获取索引值
  handleMenuChange(e) {
    // 获取点击后的索引值
    const { index } = e.currentTarget.dataset;
    let rightGoodsList = this.Cates[index].children;
    this.setData({
      rightGoodsList,
      currentindex: index,
      scrolltop: 0
    });
  },
  // 封装视图需要的数据
  handleOneload() {
    // 分析可得我们左侧列表只需要大标题和id即可 过滤取到数据
    // 注意map里面的中阔号() 是简写 相当于 是 { return 数据 }
    let leftMenuList = this.Cates.map(v => ({
      cat_id: v.cat_id,
      cat_name: v.cat_name
    }));
    // 先获取第一个大标题大家电的数据
    let rightGoodsList = this.Cates[0].children;
    this.setData({
      leftMenuList,
      rightGoodsList
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
