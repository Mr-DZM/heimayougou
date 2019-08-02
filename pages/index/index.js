//Page Object
Page({
  data: {
    // 定义一个轮播图数组
    swiperList:[],
    // 定义一个分类导航数组
    navCateList:[],
    // 定义一个楼层数组
    floorList:[]
    
  },
  //options(Object)
  onLoad: function(options) {
    // 调用函数 getSwiperList 获得轮播图数据
    this.getSwiperList();
    // 调用函数 getnavCateList 获取分类导航数据
    this.getnavCateList();
    // 调用函数getfloorList获取楼层数据
    this.getfloorList();
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
  // 获取分类导航数据
  getnavCateList(){
    wx.request({
      url: "https://api.zbztb.cn/api/public/v1/home/catitems",
      header: { "content-type": "application/json" },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: result => {
        // console.log(result);
        // 数据请求回来后更新data里的数据
        this.setData({
          navCateList:result.data.message,
        })
      },

    });
      
  },
  // 获取楼层数据
  getfloorList(){
    wx.request({
      url: "https://api.zbztb.cn/api/public/v1/home/floordata",
      success: result => {
        // console.log(result);
        // 获取数据后更新数据
        this.setData({
          floorList:result.data.message
        });
      },

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
  