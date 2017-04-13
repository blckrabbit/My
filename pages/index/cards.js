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
    userInfo: {}
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
  },
  vClick:function(e){
    if(e.currentTarget.id=="new_s"){
      this.setData({'ctl.hidden':true,'ctl.bgcolor':ccolor,'ctl.bgcolors':'#fff'});
    }else if(e.currentTarget.id=="my_s"){
      this.setData({'ctl.hidden':false,'ctl.bgcolor':'#fff','ctl.bgcolors':ccolor});
    }else if(e.currentTarget.id=="btn_my_s"){

    }
  }
})
