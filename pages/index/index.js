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
    // 微信自带的请求 有很多默认值都被手动删了
     wx.request({
       url: "https://api.zbztb.cn/api/public/v1/home/swiperdata",
       success: result => {
        //  console.log(result);
        // 请求数据后更新data里的swiperList的值
         this.setData({
           swiperList:result.data.message
         });
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
  