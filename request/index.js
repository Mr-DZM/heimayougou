 
 export const request=(params)=>{
   const baseUrl = "https://api.zbztb.cn/api/public/v1";
  //  使用Promise解决回调地狱
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      // 写在后面会覆盖前面的url
      url: baseUrl+params.url,
      success: result => {
        // 下面这个函数调用之后返回一个Promise
        resolve(result.data.message);
      },
      fail: error => {
        reject(error);
      }
    });
      
  })
 }