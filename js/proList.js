$(function(){
    $(".shaixuan-tj span.crumb-select-item").live('hover',function(event){
        if(event.type=='mouseenter'){ 
        $(this).addClass("crumb-select-itemon");
        }else{ 
        // $(this).removeClass("crumb-select-itemon");
        } 
    });
    $(".shaixuan-tj span.crumb-select-item").live('click', function(event){
        event.preventDefault();
        $(this).remove();
        var TTR = $(this).find("em").text();
        $(".show-con a").each(function(){
            var TT = $(this).text();
                THI = $(this);
                THIPP = $(this).parents("dl");
            if(TTR==TT){
                THI.removeClass("nzw12");
                THIPP.css("display","block");
            }
        })
    });
    $(".show-con a").click(function(event){
        event.preventDefault();
             THIP = $(this).parents("dl");
        if($(this).hasClass("nzw12")){
        }else{
            $(this).addClass("nzw12");
            var zhiclass = $(this).parents("dd").siblings("dt").find("a").text();
                zhicon = $(this).text();
                tianjaneir="<span class='crumb-select-item'><a href=''><b>"+zhiclass+"</b><em>"+zhicon+"</em><i class='icon-remove'></i></a></span>"
            $(".shaixuan-tj").children().last().after(tianjaneir);
            // 点击消失
            // THIP.css("display","none");
        }
    });
    $(".show-more").click(function(event){
        event.preventDefault();
        var ticon = $(this).find("i");
            tspan = $(this).find("span");
            if($(this).hasClass("zk")){
                $(this).siblings(".show-con").css("height","30px");
                ticon.removeClass("icon-angle-up");
                ticon.addClass("icon-angle-down");
                tspan.html("更多");
                $(this).removeClass("zk")
            }else{
                $(this).siblings(".show-con").css("height","auto");
                ticon.removeClass("icon-angle-down");
                ticon.addClass("icon-angle-up");
                tspan.html("收起");
                $(this).addClass("zk")
            }
    });
    $(".moreban").click(function(){
        $(".xianshi").css({"display":"block"});
        $(".moreban").css({"display":"none"});
        $(".jjban").css({"display":"block"});
    })
    $(".jjban").click(function(){
        $(".xianshi").css({"display":"none"});
        $(".moreban").css({"display":"block"});
        $(".jjban").css({"display":"none"});
    })

    //分页
    $("#pagination1").pagination({
        currentPage: 1,
        totalPage: 12,
        callback: function(current) {
            $("#current1").text(current)
        }
    });


    //商品列表筛选条件
    //1.点击变色
    let _sort = $(".sort")[0].children;
    for(let i=0,len=_sort.length;i<len;i++){
        _sort[i].onclick = function(){
            for(let j=0,len=_sort.length;j<len;j++){
                _sort[j].style.cssText = "background:#fff;color:#000;";
            }
            _sort[i].style.cssText = "background:#e4393c;color:#fff;";
        }
    }
    //2.点击改变数值
    let yeNum = $(".yeNum").html();
    let yeSum = $(".yeSum").html();
    $("#skip_left")[0].onclick = function(){
        if(yeNum-- == 1){
            yeNum = 1;
        }
        $(".yeNum").html(yeNum);
    }
    $("#skip_right")[0].onclick = function(){
        if(yeNum++ == yeSum){
            yeNum = yeSum;
        }
        $(".yeNum").html(yeNum);
    }

    //商品列表展示区
    let proLis = $(".proLis")[0].children;
    let minleft = $(".minleft");    
    let minright = $(".minright");
    for(let i=0;i<proLis.length;i++){
        let oo = document.getElementsByClassName("bigloveimg")[i].src;
        let proleft = 0;

        let imgUlsBox = $(".imgUlsBox")[i].children;
        for(let n=0,len=imgUlsBox.length;n<len;n++){
            $(".imgUlsBox")[i].style.width = (len*36) +"px";
            //增加判断   当小图个数大于6时 显示左右箭头
                if(len-6 > 0){
                minleft[i].onclick = function(){
                    proleft = proleft - 35;
                    if($(".imgUlsBox")[i].offsetLeft<=0){
                        $(".imgUlsBox")[i].style.cssText = "left:" +proleft +"px;";
                        let syu = (len-6)*35;
                        $(".imgUlsBox")[i].style.cssText = "left:-"+syu+"px;";
                    }
                }
                minright[i].onclick = function(){
                    proleft = proleft + 35;
                    $(".imgUlsBox")[i].style.cssText = "left:" +proleft +"px;";
                    if($(".imgUlsBox")[i].offsetLeft>=0){
                        $(".imgUlsBox")[i].style.cssText = "left:0px;";
                    }
                }
            }else{
                minleft[i].style.cssText = "display:none";
                minright[i].style.cssText = "display:none";
            }
            //通过小图查看相应大图
            imgUlsBox[n].onmouseenter = function(){
                let aa = $(this).find("img").attr("src");
                document.getElementsByClassName("bigloveimg")[i].src=aa;
            } 
            imgUlsBox[n].onmouseleave = function(){
                let aa = $(this).find("img").attr("src");
                document.getElementsByClassName("bigloveimg")[i].src=oo;
            }
        }

        
       
       
        proLis[i].onmouseenter = function(){
            //改变大盒子样式
            $(".ulLiBox")[i].style.cssText = "margin-left:3px;z-index:9;top:-10px;border:1px solid #e9e9e9;box-shadow:0 0 2px 3px #ddd";
            //改变小图盒子的样式
            $(".minimgBox")[i].style.cssText="height:32px;overflow:hidden";
            //立即购买  效果
            $(".pro_buy")[i].style.cssText="height:32px;overflow:hidden";
            //点击立即购买   弹出效果
            $(".atOnce")[i].onclick = function(){
                $(".collect_JoinCar")[i].style.cssText = "display:block;z-index:999;"
                //商品列表遮罩层处效果  图片颜色 
                let colorBoxs =$(".colorBoxs")[i].children;
                for(let m = 0;m<colorBoxs.length;m++){
                    //图片颜色
                    colorBoxs[m].onclick = function(){
                        let bb = $(this).parents("li").find(".showimgs");
                        let dd = bb[m].title
                        $(".showColor").html(dd);
                        for(j=0;j<colorBoxs.length;j++){
                            colorBoxs[j].style.cssText = "border:1px solid #ddd;"
                        }
                        colorBoxs[m].style.cssText = "border:1px solid red;"
                    }
                }

                 //商品列表遮罩层处效果  尺码大小
                let sizeBox = $(".sizeBox")[i].children;
                for(let m = 0;m<sizeBox.length;m++){
                    //尺码大小
                    sizeBox[m].onclick = function(){
                        let xx = $(this).parents("li").find(".sizes");
                        let cc = xx[m].innerHTML;
                        $(".showSize").html(cc);
                        for(let j=0;j<sizeBox.length;j++){
                            sizeBox[j].style.cssText = "border:1px solid #ddd;"
                        }
                        this.style.cssText = "border:1px solid red;"
                    }
                }
            }
            //点击加入购物车   弹出效果
            $(".textChange")[i].onclick = function(){
                $(".collect_JoinCar")[i].style.cssText = "display:block;z-index:999;"
            }

             
            
            //点击遮罩层上的取消   触发消失按钮效果
            $(".abolish")[i].onclick = function(){
                $(".collect_JoinCar")[i].style.cssText = "display:none;"
            }
            
        }
        proLis[i].onmouseleave = function(){
            $(".ulLiBox")[i].style.cssText = "z-index:8;top: 0;";
            // $(".minimgBox")[i].style.cssText="height:0px;overflow:hidden"; //隐藏小图图片列表
            $(".pro_buy")[i].style.cssText="height:0px;overflow:hidden";
            // $(".ProshowMinLayer")[i].style.cssText = "display:none;"; //遮罩层效果
            $(this).find(".textChange").css({"color":"black"});

            $(".collect_JoinCar")[i].style.cssText = "display:none;";

            //清空颜色  尺码的值
            $(".colorBoxs li").css({"border":"1px solid #ddd"})
            $(".sizeBox li").css({"border":"1px solid #ddd"})
            $(".showColor").html("");
            $(".showSize").html("");
        }
    }
});
$("s").each(function(){
    $(this).find("goumai").click(function(){

    })
})