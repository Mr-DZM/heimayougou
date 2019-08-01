//Page Object
Page({
  data: {
    // 定义一个轮播图数据
    swiperList:[],
  },
  //options(Object)
  onLoad: function(options) {
    // 调用函数 getSwiperList 获得轮播图数据
    this.getSwiperList();
  },
  // 获取轮播图的数据
  getSwiperList(){
    // 微信自带的请求
     wx.request({
       url: "https://api.zbztb.cn/api/public/v1/home/swiperdata",
       success: result => {
         console.log(result);
       }
     });
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  