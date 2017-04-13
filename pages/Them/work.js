var app = getApp()
Page({
  data: {
      arr:["员工牌","嘉宾牌"]
  },
  onLoad: function () {
     wx.getSystemInfo({
          success:function(res){
              this.setData({
                  Height:res.windowHeight,
                  Width:res.windowWidth
              });
          }.bind(this)
      });
  }
});