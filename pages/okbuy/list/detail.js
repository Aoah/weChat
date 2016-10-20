Page({
  data:{
    list1:[
         "默认","销量","价格","折扣"
    ],
    current:0,
    detail2:[
       {
          src:"/images/detailT2.jpg",
          title:"Adidas阿迪达斯 男式 武极系列时尚拼接面连帽卫衣文化衫",
          price1:"199",
          price2:"799",
          discount:"2.5折"
       },{
          src:"/images/detailT2.jpg",
          title:"Adidas阿迪达斯 男式 武极系列时尚拼接面连帽卫衣文化衫",
          price1:"199",
          price2:"799",
          discount:"2.5折"
       },{
          src:"/images/detailT2.jpg",
          title:"Adidas阿迪达斯 男式 武极系列时尚拼接面连帽卫衣文化衫",
          price1:"199",
          price2:"799",
          discount:"2.5折"
       },{
          src:"/images/detailT2.jpg",
          title:"Adidas阿迪达斯 男式 武极系列时尚拼接面连帽卫衣文化衫",
          price1:"199",
          price2:"799",
          discount:"2.5折"
       },{
          src:"/images/detailT2.jpg",
          title:"Adidas阿迪达斯 男式 武极系列时尚拼接面连帽卫衣文化衫",
          price1:"199",
          price2:"799",
          discount:"2.5折"
       }
    ]
    // text:"这是一个页面"
  },
  navtap:function(event){
    this.setData({
        current:event.target.dataset.index
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
