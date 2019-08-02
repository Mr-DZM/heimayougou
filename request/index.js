 
 export const request=(params)=>{
  //  使用Promise解决回调地狱
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      success: (result) => {
        // 下面这个函数调用之后返回一个Promise
        resolve(result);
      },
      fail: (error) => {
        reject(error)
      },

    });
      
  })
 }