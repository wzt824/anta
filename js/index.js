
$(function(){
    //show区效果图
    let showlis = $(".showUls")[0].children;
    let showLayer = $(".showLayer");
    let showMin =$(".showMin");
    let showMinLayer =$(".showMinLayer");
    for(let i=0,len=showlis.length;i<len;i++){
        showlis[i].onmouseenter=function(){
            showLayer[i].style.opacity = 1;
            showMin[i].onmouseenter=function(){
                showMinLayer[i].style.cssText = "display:block;";
                $(this).find(".showMinLayer").animate({
                    left:'0px'
                },1500);
                $(this).find(".textChange").css({"color":"black","transition":"all 2.2s"});
            }
            showMin[i].onmouseleave=function(){
                showMinLayer[i].style.cssText = "display:none;";
                $(this).find(".showMinLayer").animate({
                    left:'-114px'
                },1500);
                $(this).find(".textChange").css({"color":"white","font-weight":"900","transition":"all 1.5s"});
            }
            
        }
        showlis[i].onmouseleave=function(){
            showLayer[i].style.opacity = 0;
            $(".showMinLayer")[i].style.left = "-114px";
        }
    }
    //商品列表展示区
    let proLis = $(".proLis")[0].children;
    let minleft = $(".minleft");    
    let minright = $(".minright");
    for(let i=0;i<proLis.length;i++){
        let oo = document.getElementsByClassName("bigloveimg")[i].src;
        let proleft = 0;
        proLis[i].onmouseenter = function(){
            //改变大盒子样式
            $(".ulLiBox")[i].style.cssText = "z-index:9;top:-10px;box-shadow:0 0 5px 5px #ddd";
            let imgUls = $(".imgUls")[i].children;
            //改变小图盒子的样式
            $(".minimgBox")[i].style.cssText="height:32px;overflow:hidden";
            for(let n=0,len=imgUls.length;n<len;n++){
                $(".imgUls")[i].style.width = (len*36) +"px";
                //增加判断   当小图个数大于6时 显示左右箭头
                 if(len-6 > 0){
                    minleft[i].onclick = function(){
                        proleft = proleft - 35;
                        if($(".imgUls")[i].offsetLeft<=0){
                            $(".imgUls")[i].style.cssText = "left:" +proleft +"px;";
                            let syu = (len-6)*35;
                            $(".imgUls")[i].style.cssText = "left:-"+syu+"px;";
                        }
                    }
                    minright[i].onclick = function(){
                        proleft = proleft + 35;
                        $(".imgUls")[i].style.cssText = "left:" +proleft +"px;";
                        if($(".imgUls")[i].offsetLeft>=0){
                            $(".imgUls")[i].style.cssText = "left:0px;";
                        }
                    }
                }else{
                    minleft[i].style.cssText = "display:none";
                    minright[i].style.cssText = "display:none";
                }
                //通过小图查看相应大图
                imgUls[n].onmouseenter = function(){
                    let aa = $(this).find("img").attr("src");
                    document.getElementsByClassName("bigloveimg")[i].src=aa;
                } 
                imgUls[n].onmouseleave = function(){
                    let aa = $(this).find("img").attr("src");
                    document.getElementsByClassName("bigloveimg")[i].src=oo;
                }
            }
            //立即购买  效果
            $(".pro_buy")[i].style.cssText="height:32px;overflow:hidden";
            $(".buy_now")[i].onmouseenter = function(){
                $(".ProshowMinLayer")[i].style.cssText = "display:block;";
                $(this).find(".ProshowMinLayer").animate({
                    left:'0px'
                },1500);
                $(this).find(".textChange").css({"color":"white","transition":"all 2.2s","z-index":10});
            }
            $(".buy_now")[i].onmouseleave = function(){
                $(".ProshowMinLayer")[i].style.cssText = "display:none;";
                $(this).find(".ProshowMinLayer").animate({
                    left:'-120px'
                },1500);
                $(this).find(".textChange").css({"color":"black","transition":"all 2.2s","z-index":10});
            }
        }
        proLis[i].onmouseleave = function(){
            $(".ulLiBox")[i].style.cssText = "z-index:8;top: 0;";
            $(".minimgBox")[i].style.cssText="height:0px;overflow:hidden";
            $(".pro_buy")[i].style.cssText="height:0px;overflow:hidden";
            $(".ProshowMinLayer")[i].style.cssText = "display:none;";
            $(this).find(".textChange").css({"color":"black"});
        }
    }
    //加载更多商品特效
    $(".pro_buy_load")[0].onmouseenter = function(){
        $(".ProshowMinLayer_load")[0].style.cssText = "display:block;";
        $(this).find(".ProshowMinLayer_load").animate({
            left:'0px'
        },1500);
        $(this).find(".textChange_load").css({"color":"#fff","transition":"all 2.2s","z-index":10});
    }
    $(".pro_buy_load")[0].onmouseleave = function(){
        $(".ProshowMinLayer_load")[0].style.cssText = "display:none;";
        $(this).find(".ProshowMinLayer_load").animate({
            left:'-300px'
        },1500);
        $(this).find(".textChange_load").css({"color":"#dbdbdb","transition":"all 2.2s","z-index":10});
    }
});