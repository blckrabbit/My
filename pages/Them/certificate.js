var app = getApp()
Page({
  data: {
      arr:["身份证","会员卡","银行卡","礼品卡","驾驶证","行驶证"]
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