//index.js
//获取应用实例
var ccolor="#eee";
var app = getApp()
Page({
  data: {
    motto: '',
    userInfo: {},
    imgUrls: [
      'sfsafdsa',
      'safdsafa',
      'hsafd'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
    cartypes:["简历","..工作牌","证件","..贺卡"],
    carname:"简历",
    cindex:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

     wx.getSystemInfo({
          success:function(res){
              console.info(res.windowHeight);
              this.setData({
                  Height:res.windowHeight,
                  Width:res.windowWidth
              });
          }.bind(this)
      });

  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  vClickEvent:function(e){
    if(e.currentTarget.id=="createId"){
      var path="create";
      switch(this.data.cindex){
          case 0:
            path="create";
          break;
          case 1:
            path="../Them/work";
          break;
          case 2:
            path="../Them/greetingCard";
          break;
          case 3:
            path="../Them/certificate";
          break;
      }
      wx.navigateTo({
         url: path
       });
    }
  },
  swiperBind:function(e){
    var cartypes = this.data.cartypes;
    this.setData({"carname":cartypes[e.detail.current],"cindex":e.detail.current});
  }
  
})
