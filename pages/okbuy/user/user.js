Page({
  data:{
    // text:"这是一个页面"
      //选择手机验证码登录
    phoneIn:"circle",
      //选择密码登入
    posswordIn:"success",
    //当切换登录方式时，切换字体颜色
    changeTextC:{
       passbind:"pass",
       yanzebind:"yanze"
    },
    //当切换登录方式时，切换input 中的内容
    inputContent:{
       laberT:"  账     号",
       inputT:"手机号/用户名/邮箱",
       laberB:"  密     码",
       inputB:"请输入密码"
    }
  },
   //绑定的用户名输入框 随时检查输人内容
  bindKeyInputName:function(event){
        console.log(event.detail.value);

  },
  //绑定的密码输入框
  bindKeyPassword:function(event){
      console.log(event.detail.value);


  },
  // 登录按钮的设置
  warn:function(){
     console.log("login:");
  },
  // 选择密码登录的tap事件
  passtap:function(){
       this.setData({
             posswordIn:"success",
             phoneIn:"circle",
             changeTextC:{
             passbind:"pass",
             yanzebind:"yanze"
             },
             inputContent:{
                laberT:"  账     号",
                inputT:"手机号/用户名/邮箱",
                laberB:"  密     码",
                inputB:"请输入密码"
             }
       })
         console.log("pas")
  },
  //选择手机号登录的tap 事件
  phonetap:function(){
      this.setData({
             posswordIn:"circle",
             phoneIn:"success",
             changeTextC:{
                 passbind:"yanze",
                 yanzebind:"pass"
             },
             inputContent:{
                laberT:"  手机号",
                inputT:"请输入手机号码",
                laberB:"  验证码",
                inputB:"请输入验证码"
             }
      })

     console.log("phone")
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
