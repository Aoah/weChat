Page({
    data: {
        list1: [
            "运动生活",
            "户外鞋服",
            "休闲服装",
            "精品男装",
            "时尚男鞋",
            '时尚女鞋',
            "快乐儿童",
            "全球购",
            "家居服饰",
            "品牌馆"
        ],
        loadHidden:true, //点击每个分类时进行加载
        all:{},
        list2:[],
        none: [{
            src: "http://0.image.lx.okbuycdn.com/nbn/l72_50_detect/static/2f8111530c88910cdefc89d089bbd44e.jpg",
            dec: "耐克"
        },{
            src: "http://0.image.lx.okbuycdn.com/nbn/l72_50_detect/static/2f8111530c88910cdefc89d089bbd44e.jpg",
            dec: "耐克"
        },{
            src: "http://0.image.lx.okbuycdn.com/nbn/l72_50_detect/static/2f8111530c88910cdefc89d089bbd44e.jpg",
            dec: "耐克"
        },{
            src: "http://0.image.lx.okbuycdn.com/nbn/l72_50_detect/static/2f8111530c88910cdefc89d089bbd44e.jpg",
            dec: "耐克"
        },{
            src: "http://0.image.lx.okbuycdn.com/nbn/l72_50_detect/static/2f8111530c88910cdefc89d089bbd44e.jpg",
            dec: "耐克"
        },{
            src: "http://0.image.lx.okbuycdn.com/nbn/l72_50_detect/static/2f8111530c88910cdefc89d089bbd44e.jpg",
            dec: "耐克"
        },{
            src: "http://0.image.lx.okbuycdn.com/nbn/l72_50_detect/static/2f8111530c88910cdefc89d089bbd44e.jpg",
            dec: "耐克"
        }],
        none2: [{
                title: "运动鞋",
                more: [{
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                },{
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                },{
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                },{
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                },{
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }]
            }, {
                title: "休闲鞋",
                more: [{
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }, {
                    src: "http://i.okaybuy.cn/images/multipic/new/201511/3c/3c75af8c9c3d9ff1fb37c826958312bb.jpg",
                    titLittle: "跑步鞋"
                }]
            }
        ],
         list3:[],
        now: 0,
        liclass: "li",
        // text:"这是一个页面"
    },
    li1tap: function(event) {

      var _this=this;
        var temp = event.target.dataset.index;
        this.setData({
            now: temp,
            loadHidden:false
        })
        // var object=_this.data.all;
        // var list=object["brand_category"];
        //  var arr=[];
        // for(var i=0;i<list.length;i++){
        //       var obj={};
        //       obj.src=list[i]["brand_picture"];
        //       obj.dec=list[i]["brand_name"];
        //      // console.dir(obj)
        //       arr.push(obj);
        // }
        // _this.setData({
        //      list2:arr
        // })
        // console.log(_this.data.list2);
        wx.request({
          url:'http://platform.okbuy.com/app/v15/focus/virtual_category',
           data:{
           },
           header:{
                'Content-Type':'application/json'
           },
           success:function(res){
                var object=res.data.results[temp];
                var list=object["brand_category"];
                var list2=object["second"]
                var arr=[];
                var arr2=[];
                for(var i=0;i<list2.length;i++){
                        var obj={};
                        obj.title=list2[i]["virtual_name"];
                        obj.more=[];
                        for(var j=0;j<list2[i]["third"].length;j++){
                              var objL={}
                              objL.src=list2[i]["third"][j]["virtual_icon"];
                              objL.titLittle=list2[i]["third"][j]["virtual_name"];
                              obj.more.push(objL);
                        }
                        arr2.push(obj);
                }
                _this.setData({
                  list3:arr2
                })
             for(var i=0;i<list.length;i++){
                   var obj={};
                   obj.src=list[i]["brand_picture"];
                   obj.dec=list[i]["brand_name"];
                  // console.dir(obj)
                   arr.push(obj);
             }
             _this.setData({
                  list2:arr,
                  loadHidden:true
             })

             console.log(res.data);
          }
        })
       console.log(event.target.dataset.index);
    },
    list3Nav:function(){
        wx.navigateTo({
        url:"detail"
      });
    },
    onLoad: function(options) {
       var _this=this;
       _this.setData({
            loadHidden:false
       })
      // _this.data.loadHidden=false;
      wx.request({
        url:'http://platform.okbuy.com/app/v15/focus/virtual_category',
         data:{
         },
         header:{
              'Content-Type':'application/json'
         },
         success:function(res){
              var object=res.data.results[0];
              var list=object["brand_category"];
              var list2=object["second"]
              var arr=[];
              var arr2=[];
              for(var i=0;i<list2.length;i++){
                      var obj={};
                      obj.title=list2[i]["virtual_name"];
                      obj.more=[];
                      for(var j=0;j<list2[i]["third"].length;j++){
                            var objL={}
                            objL.src=list2[i]["third"][j]["virtual_icon"];
                            objL.titLittle=list2[i]["third"][j]["virtual_name"];
                            obj.more.push(objL);
                      }
                      arr2.push(obj);
              }
              _this.setData({
                list3:arr2
              })
           for(var i=0;i<list.length;i++){
                 var obj={};
                 obj.src=list[i]["brand_picture"];
                 obj.dec=list[i]["brand_name"];
                // console.dir(obj)
                 arr.push(obj);
           }
           _this.setData({
                list2:arr,
                loadHidden:true
           })

           console.log(_this.data.loadHidden);
           console.log(res.data);
        }
      })

        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})
