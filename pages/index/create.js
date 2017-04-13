var ccolor="#eee";
var app = getApp()
Page({
  data: {
    motto: '',
    ctl:{
      hidden:true,
      bgcolor:ccolor,
      bgcolors:"#fff",
    },
    colors:["ffa360","8ce32f","46e122","3eb2fc","c93efc","fc3eae","f8488a","01AA8F","fff","000","cb5252"],
    clss:[[["chunse","纯色"],["jianbian","渐变"]],[["banfen","半分"],["ziwo","自我"]],[["heibai","黑白"],["grad_02","艺术"]],[["tyl","无尽"],["","照片"]],[["grad","随机"],["radial","自定义"]]],
    userInfo: {},
    chooseindex:"",
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
  },
  vCClick:function(e){
      this.setData({"chooseindex":e.currentTarget.dataset.index});
  },
  vMClick:function(e){
      this.setData({"chooseThemindex":e.currentTarget.dataset.index,"chooseThemcindex":e.currentTarget.dataset.cindex});
      wx.navigateTo({
        url: 'style'
      })
  }
  
})