Page({
  data:{
    imgUrls:[
       "/images/swp1.jpg",
       "/images/swp2.jpg",
       "/images/swp3.jpg",
       "/images/swp4.jpg",
       "/images/swp5.jpg",
       "/images/swp6.jpg",
       "/images/swp7.jpg",
       "/images/swp8.jpg"
    ],
       indicatorDots:true,
       autoplay:true,
       interval:2000,
       duration:1000,
      hiddenrefresh:true,
      scrollTop:1,
    list:[
      {
        "src":"/images/tit1.png",
        "txt":"品牌"
      },
      {
        "src":"/images/tit2.png",
        "txt":"分类"
      },
      {
        "src":"/images/tit3.png",
        "txt":"我的订单"
      },
      {
        "src":"/images/tit4.png",
        "txt":"我的收藏"
      }
    ],
    more:[
        {
           "src":"/images/more1.jpg",
           "text1":"2.9折起 ",
           "text2":"耐克秋装全场满99减10元可累计"
        },
        {
           "src":"/images/more2.jpg",
           "text1":"249元 ",
           "text2":"NB鬼重虎休闲鞋"
        },
        {
           "src":"/images/more3.jpg",
           "text1":"2.9折封顶 ",
           "text2":"阿迪全线特惠一口价"
        },
        {
           "src":"/images/more4.jpg",
           "text1":"38元起 ",
           "text2":"李宁红外套/棉羽专场"
        },
        {
           "src":"/images/more5.jpg",
           "text1":"一折起",
           "text2":"阿迪粉丝节疯狂换季"
        },
        {
           "src":"/images/more6.jpg",
           "text1":"多件多折",
           "text2":"马克华菲夹克外套"
        },
        {
           "src":"/images/more7.jpg",
           "text1":"两双299元",
           "text2":"爱乐 好货不断"
        }
    ]
    // text:"这是一个页面"
  },
    //scroll -view  滑动到顶部时触发
    upper:function(){
        var _this=this;
        this.setData({
            hiddenrefresh:false
           })
        wx.request({
            url:"http://localhost/mock/refresh.json",
            data:{},
            header:{
                'Content-Type':'application/json'
            },
            success:function(res){
                console.log("success");
                setTimeout(function(){
                   _this.setData({
                       hiddenrefresh:true,
                       scrollTop:1
                   })
                    },1500)}
            })
        console.log("top");
    },
    //scrol-view  滑动到底部时触发、
    lower:function(){
        console.log("lower");
    },
    navigation:function(){
      wx.navigateTo({
           url:'../list/detail?id=1'
      })

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
