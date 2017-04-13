var app = getApp()
Page({
  data: {
  },
  onLoad: function (e) {
    this.setData({"url":e.no});
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