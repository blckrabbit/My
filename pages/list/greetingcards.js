var app = getApp()
Page({
  data: {
      datas:[
          ["友谊长存","https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a572.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b572.swf"],
          ["想你的日子","https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a884.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b884.swf"],
          ["快乐每一天","https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a873.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b873.swf"],
          ["浓浓的情谊","https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a113.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b113.swf"],
          ["老朋友的想念","https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a571.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b571.swf"],
          ["友谊相伴","https://rescdn.qqmail.com/zh_CN/greetingcard/pic/yy/07/yy0713.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/flash/yy/07/yy0713.swf"],
          ["想你的日子","https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a884.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b884.swf"],
          ["单车","https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a93.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b93.swf"],
          ["照顾你", "https://rescdn.qqmail.com/zh_CN/greetingcard/thumb/a886.gif","https://rescdn.qqmail.com/zh_CN/greetingcard/card/b886.swf"]
          ]
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