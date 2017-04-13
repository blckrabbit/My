var app = getApp()
Page({
  data: {
      arr:["明信片","贺卡"]
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