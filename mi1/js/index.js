$(function(){

    $("#a1").mouseover(function(){
        $(".gwc").stop().slideDown();
    })
    $("#a1").mouseout(function(){
        $(".gwc").stop().slideUp();
    })
    $("#txt").focus(function(){
        $("#textchild").css("display","block");
        $(this).css("border","1px solid red");
        $("#btn").css("border","1px solid red");
    })
    $("#txt").blur(function(){
        $("#textchild").css("display","none");
        $(this).css("border","1px solid gray");
        $("#btn").css("border","1px solid gray");
    })


      //lbt1
    var imgArr=$(".header .right .img1 a");
    $(".header .right .lab li").addClass("gr");
    $(".header .right .lab li").addClass("mouse");
    var lab= $(".header .right .lab li");
    lab.addClass("font")
    $.each(lab,function(ind,cont){
        lab.eq(ind).text(ind);
    });
    var index=0;
    function bgco(){
        var bgc;
        switch(index){
            case 0:bgc="rgba(255,67,3,0.5)"; break;
            case 1:bgc="rgba(237,237,237,0.5)"; break;
            case 2:bgc="rgba(253,241,229,0.5)"; break;
            case 3:bgc="rgba(240,195,190,0.5)"; break;
            case 4:bgc="rgba(236,236,236,0.5)"; break;
            default:bgc="rgba(243,243,243,0.5)";
        }
        $(".header .left").css("backgroundColor",bgc);
    }

    lab.click(function(){
        $(this).addClass("bg");
        $(this).siblings().removeClass("bg");
        index=$(this).text();
        var imgnum=index;
        imgArr.eq(imgnum).css("display","block");
        imgArr.eq(imgnum).siblings().css("display","none");
        index=parseInt(index);
        console.log(index);
        bgco();
    })
    //console.log(typeof imgArr,imgArr,imgArr[3],imgArr.eq(3));
    var z=$(".header .right .z");
    z.addClass("mouse")
    var r=$(".header .right .r");
    r.addClass("mouse")
    z.click(function(){
       index--;
       if(index<0){
           index=5;
       }
       imgArr.eq(index).css("display","block");
       imgArr.eq(index).siblings().css("display","none");
       lab.eq(index).addClass("bg");
       lab.eq(index).siblings().removeClass("bg");
       bgco();
    });

    r.click(function(){
       index++;
       if(index>5){
           index=0;
       }
       imgArr.eq(index).css("display","block");
       imgArr.eq(index).siblings().css("display","none");
       lab.eq(index).addClass("bg");
       lab.eq(index).siblings().removeClass("bg");
       bgco();
    });


    setInterval(function(){
        index++;
        if(index>5){
            index=0;
        }
       imgArr.eq(index).css("display","block");
       imgArr.eq(index).siblings().css("display","none");
       lab.eq(index).addClass("bg");
       lab.eq(index).siblings().removeClass("bg");
       bgco();
    },2000);

    var that;
    var lableft=$(".header .left li");
    lableft.append("<b></b>");
    var lableftb=$(".header .left li b");
    lableftb.css({"display":"block","width":"0px","height":"0px"});
    lableftb.addClass("font");
    $.each(lableft,function(ind1,cont1){
        lableftb.eq(ind1).text(ind1);
    })
    $(".header .left li").mouseover(function(){
        that=$(this);
        var nro= $(".header .right .lbt2 .nrong");
        nro.eq(that.find("b").text()).css("display","block");
        nro.eq(that.find("b").text()).siblings().css("display","none");
        that.css("backgroundColor","#FF6100")
        that.siblings().css("backgroundColor","")
        $(".header .right .lbt2").css("display","block");
    })

     $(".header .left li").mouseout(function(){
        that.css("backgroundColor","");
        $(".header .right .lbt2").css("display","none");
    })

    $(".header .right .lbt2").mouseover(function(){
    that.css("backgroundColor","#FF6100")
    $(".header .right .lbt2").css("display","block");
    })

    $(".header .right .lbt2").mouseout(function(){
        that.css("backgroundColor","");
        $(".header .right .lbt2").css("display","none");
    })

    $(".header .right .lbt2 .nrong ul li a span").mouseover(function(){
        $(this).css("color","#FF6100");
        $(this).siblings().css("color","black");
    })

    $(".header .right .lbt2 .nrong ul li a span").mouseout(function(){
        $(this).css("color","black");

    })

   
   function yanshi(){
        $(".qccon ul li .quz a img").each(function(i,c){
        var  qImgWidth=$(".qccon ul li .quz a img").eq(i).width();
        var  qImgHeight=$(".qccon ul li .quz a img").eq(i).height();
        var  yiban=-qImgWidth/2;
        var  yibanH=-qImgHeight/2;
        $(".qccon ul li .quz a img").eq(i).css("marginLeft",yiban);
        $(".qccon ul li .quz a img").eq(i).css("marginTop",yibanH);
        var  qPWidth=$(".qccon ul li .quz a p").eq(i).width();
        var  yiban1=-qPWidth/2;
        $(".qccon ul li .quz a p").eq(i).css("marginLeft",yiban1);

    })
    }

    function qus(){
        $(".qccon1 ul li div:nth-child(1)").removeClass("qus");
        $(".qccon1 ul li div:nth-child(1)").removeClass("qus");
        $(".qccon2 ul li:nth-child(5) .quz").css("borderRight","none");
        $(".qccon2 ul li:nth-child(4) .quz").css("borderRight","none");
    }

    $("#navUl").mouseover(function(){
      
        $(".qwer").stop().slideDown();
        yanshi();
        qus();
      
    })
  
    $("#navUl").mouseout(function(){
        $(".qwer").stop().slideUp();
        yanshi();
        qus();
     
    })

    $(".qwer").mouseover(function(){
        $(".qwer").stop().slideDown();
        yanshi();
        qus();
    })
    $(".qwer").mouseout(function(){
        $(".qwer").stop().slideUp();
        yanshi();
        qus();
    })
    

    var that1;

    var navLi=$("#navUl li");
    navLi.append("<b></b>");
    var navLib=$("#navUl li b");
    navLib.css({"display":"block","width":"0px","height":"0px"});
    navLib.addClass("font");
    $.each(navLi,function(ind1,cont1){
        navLib.eq(ind1).text(ind1);
    })
    navLi.mouseover(function(){
        that1=$(this);
        var nro= $(".qccon");
        nro.eq(that1.find("b").text()).css("display","block");
        nro.eq(that1.find("b").text()).siblings().css("display","none");
    })

    $(".h_down .h_down_neirong>ul>li:nth-child(1) ul li a p:nth-child(1)").addClass("font1");

    var that5;
    var that11;
    var cyzll=0;
     $(".content11  .cts0 .cts1").mouseover(function(){
        that5=$(this);
        if(that5.css("color")=="rgb(50, 50, 50)"){
            that5.css("color","red");
        }else{
            that5.css("color","rgb(200, 200, 200)");
        }
    })
    $(".content11  .cts0 .cts1").mouseout(function(){
        if(that5.css("color")=="rgb(255, 0, 0)"){
            that5.css("color","rgb(50, 50, 50)");
        }else{
            that5.css("color","rgb(200, 200, 200)");
        }
    })
    $(".content11  .cts0 .cts1").click(function(){
     
        if(cyzll==732){
            cyzll=0;
            $("#ctzrul").css("left","0px");
            $("#ctzrul").css("transition","all 0.2s linear");

            if(that5.css("color")=="rgb(255, 0, 0)"){
            that5.css("color","rgb(200, 200, 200)");
            $(".content11  .cts0 .cts2").css("color","rgb(50, 50, 50)");
            }else{
                that5.css("color","rgb(200, 200, 200)");
            }
            }
    })
    $(".content11  .cts0 .cts2").mouseover(function(){
        that11=$(this);
        if(that11.css("color")=="rgb(50, 50, 50)"){
            that11.css("color","red");
        }else{
            that11.css("color","rgb(200, 200, 200)");
        }
    })
    $(".content11  .cts0 .cts2").mouseout(function(){
        if(that11.css("color")=="rgb(255, 0, 0)"){
            that11.css("color","rgb(50, 50, 50)");
        }else{
            that11.css("color","rgb(200, 200, 200)");
        }
    })
    $(".content11  .cts0 .cts2").click(function(){
        if(cyzll==0){
            cyzll=732;
            $("#ctzrul").css("left","-732px");
            $("#ctzrul").css("transition","all 0.2s linear");

            if(that11.css("color")=="rgb(255, 0, 0)"){
               that11.css("color","rgb(200, 200, 200)");
               $(".content11  .cts0 .cts1").css("color","rgb(50, 50, 50)");
            }else{
                that11.css("color","rgb(200, 200, 200)");
            }
            }
    })


    //设置秒杀倒计时
    var intotal=7200;
    var timer=setInterval(function(){
        intotal--;
        var hour=intotal/3600;
        var minute=(intotal%3600)/60;
        var second=(intotal%3600)%60;
        hour=Math.floor(hour);
        minute=Math.floor(minute);
        hour=hour<10?"0"+hour:hour;
        minute=minute<10?"0"+minute:minute;
        second=second<10?"0"+second:second;
        $("#ctzlSz span:nth-child(1)").text(hour);
        $("#ctzlSz span:nth-child(2)").text(minute);
        $("#ctzlSz span:nth-child(3)").text(second);
        if(intotal==0){
            clearInterval(timer);
        }
    },1000)

    $(".stylexia2 .stylexia2r .styleqh ul li a img").each(function(idx1,fonn){
        var center10=$(".stylexia2 .stylexia2r .styleqh ul li a img").eq(idx1).width();
        var center20=$(".stylexia2 .stylexia2r .styleqh ul li a img").eq(idx1).height();
        $(".stylexia2 .stylexia2r .styleqh ul li a img").eq(idx1).css("marginLeft",-center10/2+"px");
        $(".stylexia2 .stylexia2r .styleqh ul li a").eq(idx1).css("height",center20+"px");
    })

    $(".contentznr2 .stylexia .stylexia1 div:last-child ul li").append("<b></b>");
    $(".contentznr2 .stylexia .stylexia1 div:last-child ul li b").addClass("font");
    $(".contentznr2 .stylexia .stylexia1 div:last-child ul li").each(function(idx2,fonn1){
        $(".contentznr2 .stylexia .stylexia1 div:last-child ul li").eq(idx2).find("b").text(idx2);
    })

     $(".contentznr2 .stylexia .stylexia1 div:last-child ul li").mouseover(function(){
        $(".stylexia2 .stylexia2r .styleqh").eq($(this).find("b").text()).css("display","block");
        $(".stylexia2 .stylexia2r .styleqh").eq($(this).find("b").text()).siblings().css("display","none");
        $(this).addClass("pli");
        $(this).siblings().removeClass("pli");
     })

     

    $(".stylexia2 .stylexia2r .styleqh ul li").mouseover(function(){
    $(this).find(".ppp").css("bottom","0px");
    $(this).find(".ppp").css("transition","all 0.2s linear");
    $(this).siblings().find(".ppp").css("bottom","-75px");
    $(this).siblings().find(".ppp").css("transition","none");
    })

    $(".stylexia2 .stylexia2r .styleqh ul li").mouseout(function(){
        $(this).find(".ppp").css("bottom","-75px");
    })

   
   
   var numone=0;
   $(".contentznr3 .slideDown0 ul li a img").each(function(q,w){
     var num3=$(".contentznr3 .slideDown0 ul li a img").eq(q).width();
     $(".contentznr3 .slideDown0 ul li a img").eq(q).css("marginLeft",-num3/2+"px");
   })
   

   function a2(){
        if(numone!=0){
        $(".slideUp1  div:first-child").css("color","rgb(50, 50, 50)");
        $(".slideUp1  div:last-child").css("color","rgb(50, 50, 50)");
        }else{
            that5.css("color","rgb(200, 200, 200)");
        }
        // console.log("first mouseover:"+that5.css("color"));
   }
  
    $(".slideUp1  div:first-child").mouseover(function(){
        that5=$(this);
        if(that5.css("color")=="rgb(50, 50, 50)"){
            that5.css("color","red");
        }else{
            that5.css("color","rgb(200, 200, 200)");
        }
        // console.log("first mouseover:"+that5.css("color"));
    })
    $(".slideUp1  div:first-child").mouseout(function(){
        if(that5.css("color")=="rgb(50, 50, 50)"){
            that5.css("color","rgb(50, 50, 50)");
        }else{
            that5.css("color","rgb(200, 200, 200)");
        }
        // console.log("first mouseout:"+that5.css("color"));
    })
    $(".slideUp1  div:first-child").click(function(){
        
            if(that5.css("color")=="rgb(255, 0, 0)"){
            that5.css("color","rgb(50, 50, 50)");
            }else{
                that5.css("color","rgb(200, 200, 200)");
            }

        if(numone>=-3702&&numone<0){
            numone=numone+1234;
            $(".contentznr3 .slideDown0 ul").css("left",numone+"px");
            $(".contentznr3 .slideDown0 ul").css("transition","all 0.3s linear");
        }  

        a2();  
    })

    function a1(){
        if(numone!=-3702){
       $(".slideUp1  div:last-child").css("color","rgb(50, 50, 50)");
       $(".slideUp1  div:first-child").css("color","rgb(50, 50, 50)");
       }else{
           that11.css("color","rgb(200, 200, 200)");
       }
    //    console.log("click:"+that11.css("color"));
    }

    $(".slideUp1  div:last-child").mouseover(function(){
        that11=$(this);
        if(that11.css("color")=="rgb(50, 50, 50)"){
            that11.css("color","red");
        }else{
            that11.css("color","rgb(200, 200, 200)");
        }
        // console.log("mouseover:"+that11.css("color"));
    })

    $(".slideUp1  div:last-child").mouseout(function(){
        if(that11.css("color")=="rgb(50, 50, 50)"){
            that11.css("color","rgb(50, 50, 50)");
           
        }else{
            that11.css("color","rgb(200, 200, 200)");
          
        }
        // console.log("mouseout:"+that11.css("color"));
    })

    $(".slideUp1  div:last-child").click(function(){
       

            if(that11.css("color")=="rgb(255, 0, 0)"){
               that11.css("color","rgb(50, 50, 50)");
            }else{
                that11.css("color","rgb(200, 200, 200)");
            }

              if(numone>-3702&&numone<=0){
                numone=numone-1234;
                $(".contentznr3 .slideDown0 ul").css("left",numone+"px");
                $(".contentznr3 .slideDown0 ul").css("transition","all 0.3s linear");
        }  

        a1();
          
    })

    var slideLeft=0,slideLeft1=0,slideLeft2=0,slideLeft3=0;
    $(".contentznr5 li").mouseover(function(){
        $(this).find(".slide6").css({"display":"block","transition":"all 0.2s"});
        $(this).find(".slide7").css({"display":"block","transition":"all 0.2s"});
    })
    $(".contentznr5 li .slide6").mouseover(function(){
        $(this).css("backgroundColor","rgba(96,96,96,0.8)");
    })
    $(".contentznr5 li .slide6").mouseout(function(){
        $(this).css("backgroundColor","rgba(96,96,96,0.1)");
    })


    

    function slideLefta(tha,slidl){
           tha.eq(slidl/296).addClass("border");
           tha.eq(slidl/296).removeClass("mouse");
           tha.eq(slidl/296).css("backgroundColor","white");
           tha.eq(slidl/296).siblings().removeClass("border");
           tha.eq(slidl/296).siblings().addClass("mouse");
           tha.eq(slidl/296).siblings().css("backgroundColor","rgba(96,96,96,0.8)");
    }
    var tha1=$(".contentznr5 li:nth-child(1) .slide6");
    var tha2=$(".contentznr5 li:nth-child(2) .slide6");
    var tha3=$(".contentznr5 li:nth-child(3) .slide6");
    var tha4=$(".contentznr5 li:nth-child(4) .slide6");

    var tha11=$(".contentznr5 li:nth-child(1) .slide7");
    var tha22=$(".contentznr5 li:nth-child(2) .slide7");
    var tha33=$(".contentznr5 li:nth-child(3) .slide7");
    var tha44=$(".contentznr5 li:nth-child(4) .slide7");

    tha1.click(function(){
        if(slideLeft<0){
            slideLeft=slideLeft+296;
            $(".contentznr5 li:nth-child(1) .slideDown4").css("marginLeft",slideLeft);
            $(".contentznr5 li:nth-child(1) .slideDown4").css("transition","all 0.3s");
            slideLefta($(".contentznr5 li:nth-child(1) .slide8 .slide9"),-slideLeft);
        }
    })

    tha2.click(function(){
    if(slideLeft1<0){
        slideLeft1=slideLeft1+296;
        $(".contentznr5 li:nth-child(2) .slideDown4").css("marginLeft",slideLeft1);
        $(".contentznr5 li:nth-child(2) .slideDown4").css("transition","all 0.3s");
        slideLefta($(".contentznr5 li:nth-child(2) .slide8 .slide9"),-slideLeft1);
    }
    })

    tha3.click(function(){
    if(slideLeft2<0){
        slideLeft2=slideLeft2+296;
        $(".contentznr5 li:nth-child(3) .slideDown4").css("marginLeft",slideLeft2);
        $(".contentznr5 li:nth-child(3) .slideDown4").css("transition","all 0.3s");
        slideLefta($(".contentznr5 li:nth-child(3) .slide8 .slide9"),-slideLeft2);
    }
    })

    tha4.click(function(){
    if(slideLeft3<0){
        slideLeft3=slideLeft3+296;
        $(".contentznr5 li:nth-child(4) .slideDown4").css("marginLeft",slideLeft3);
        $(".contentznr5 li:nth-child(4) .slideDown4").css("transition","all 0.3s");
        slideLefta($(".contentznr5 li:nth-child(4) .slide8 .slide9"),-slideLeft3);
    }
    })


      tha11.click(function(){
        if(slideLeft>-592){
            slideLeft=slideLeft-296;
            $(".contentznr5 li:nth-child(1) .slideDown4").css("marginLeft",slideLeft);
            $(".contentznr5 li:nth-child(1) .slideDown4").css("transition","all 0.3s");
            slideLefta($(".contentznr5 li:nth-child(1) .slide8 .slide9"),-slideLeft);
        }
    })

    tha22.click(function(){
    if(slideLeft1>-888){
        slideLeft1=slideLeft1-296;
        $(".contentznr5 li:nth-child(2) .slideDown4").css("marginLeft",slideLeft1);
        $(".contentznr5 li:nth-child(2) .slideDown4").css("transition","all 0.3s");
        slideLefta($(".contentznr5 li:nth-child(2) .slide8 .slide9"),-slideLeft1);
    }
    })

    tha33.click(function(){
    if(slideLeft2>-888){
        slideLeft2=slideLeft2-296;
        $(".contentznr5 li:nth-child(3) .slideDown4").css("marginLeft",slideLeft2);
        $(".contentznr5 li:nth-child(3) .slideDown4").css("transition","all 0.3s");
        slideLefta($(".contentznr5 li:nth-child(3) .slide8 .slide9"),-slideLeft2);
    }
    })

    tha44.click(function(){
    if(slideLeft3>-888){
        slideLeft3=slideLeft3-296;
        $(".contentznr5 li:nth-child(4) .slideDown4").css("marginLeft",slideLeft3);
        $(".contentznr5 li:nth-child(4) .slideDown4").css("transition","all 0.3s");
        slideLefta($(".contentznr5 li:nth-child(4) .slide8 .slide9"),-slideLeft3);
    }
    })





    $(".contentznr5 li .slide7").mouseover(function(){
        $(this).css("backgroundColor","rgba(96,96,96,0.8)");
    })
    $(".contentznr5 li .slide7").mouseout(function(){
        $(this).css("backgroundColor","rgba(96,96,96,0.1)");
    })

    $(".contentznr5 li").mouseout(function(){
        $(this).find(".slide6").css("display","none");
        $(this).find(".slide7").css("display","none");
    })


    $(".contentznr5 li:nth-child(1) .slide8 .slide9:nth-child(1)").css("backgroundColor","white");
    $(".contentznr5 li:nth-child(2) .slide8 .slide9:nth-child(1)").css("backgroundColor","white");
    $(".contentznr5 li:nth-child(3) .slide8 .slide9:nth-child(1)").css("backgroundColor","white");
    $(".contentznr5 li:nth-child(4) .slide8 .slide9:nth-child(1)").css("backgroundColor","white");

    $(".contentznr5 li .slide8 .slide9").addClass("font");

    $(".contentznr5 li:nth-child(1) .slide8 .slide9").each(function(i,xhj){
        
         $(xhj).text(i);
    })
    $(".contentznr5 li:nth-child(1) .slide8 .slide9").click(function(){

        slideLeft=-296*($(this).text());
        $(".contentznr5 li:nth-child(1) .slideDown4").css("marginLeft",slideLeft);
        $(".contentznr5 li:nth-child(1) .slideDown4").css("transition","all 0.3s");
    })
    $(".contentznr5 li:nth-child(2) .slide8 .slide9").each(function(i,xhj){
         $(xhj).text(i);
    })
    $(".contentznr5 li:nth-child(2) .slide8 .slide9").click(function(){

        slideLeft1=-296*($(this).text());
        $(".contentznr5 li:nth-child(2) .slideDown4").css("marginLeft",slideLeft1);
        $(".contentznr5 li:nth-child(2) .slideDown4").css("transition","all 0.3s");
    })
    $(".contentznr5 li:nth-child(3) .slide8 .slide9").each(function(i,xhj){
         $(xhj).text(i);
    })
    $(".contentznr5 li:nth-child(3) .slide8 .slide9").click(function(){

        slideLeft2=-296*($(this).text());
        $(".contentznr5 li:nth-child(3) .slideDown4").css("marginLeft",slideLeft2);
        $(".contentznr5 li:nth-child(3) .slideDown4").css("transition","all 0.3s");
    })
    $(".contentznr5 li:nth-child(4) .slide8 .slide9").each(function(i,xhj){
         $(xhj).text(i);
    })
    $(".contentznr5 li:nth-child(4) .slide8 .slide9").click(function(){

        slideLeft3=-296*($(this).text());
        $(".contentznr5 li:nth-child(4) .slideDown4").css("marginLeft",slideLeft3);
        $(".contentznr5 li:nth-child(4) .slideDown4").css("transition","all 0.3s");
    })


    var that6=$(".contentznr5 li:nth-child(1) .slide8 .slide9");
    var gk1;
    that6.mouseover(function(){
        gk1=$(this).hasClass("border");
        if(gk1==false){
            $(this).css("backgroundColor","#FF6100");
            $(this).addClass("mouse");
        }
    })


    that6.mouseout(function(){
          if($(this).css("backgroundColor")=="rgb(255, 97, 0)"){
              $(this).css("backgroundColor","rgba(96,96,96,0.8)")
          }
    })
    that6.click(function(){
       $(this).addClass("border");
       $(this).css("backgroundColor","white");
       $(this).removeClass("mouse");
       $(this).siblings().removeClass("border");
       $(this).siblings().css("backgroundColor","rgba(96,96,96,0.8)")
       $(this).siblings().addClass("mouse");

    })





    var that7=$(".contentznr5 li:nth-child(n+2) .slide8 .slide9");

    var gk2;

    that7.mouseover(function(){
        gk2=$(this).hasClass("border");
        if(gk2==false){
            $(this).css("backgroundColor","#FF6100");
            $(this).addClass("mouse");
        }
    })
    that7.mouseout(function(){
          if($(this).css("backgroundColor")=="rgb(255, 97, 0)"){
              $(this).css("backgroundColor","rgba(96,96,96,0.8)")
          }
    })

    that7.click(function(){
       $(this).addClass("border");
       $(this).css("backgroundColor","white");
       $(this).removeClass("mouse");
       $(this).siblings().removeClass("border");
       $(this).siblings().css("backgroundColor","rgba(96,96,96,0.8)")
       $(this).siblings().addClass("mouse");
    })


    $(".contentznr6 .slixx ul li").mouseover(function(){
        $(this).find("div").css("backgroundColor","#FF6100");
        $(this).siblings().find("div").css("backgroundColor","rgba(96,96,96,0.4)");
    })

      $(".contentznr6 .slixx ul li").mouseout(function(){
        $(this).find("div").css("backgroundColor","rgba(96,96,96,0.4)");
    })

    $(window).scroll(function(){
        //console.log($("body").scrollTop());
        var topnum=$(window).scrollTop();
        if(topnum>5000){
            $(".fiex ul li:last-child").fadeIn();
        }else{
            $(".fiex ul li:last-child").fadeOut();
        }
    })


    function play(){
        if($(".plays .switch").hasClass("icon-play")){

        }else{
            $(".plays .switch").addClass("icon-play");
            $(".plays .switch").removeClass("icon-pause");
        }
    }
    $(".slixx ul li:nth-child(1)").click(function(){
        play();
        $(".plays").css({"display":"block"});
        $(".body1").css("display","block");
        $(".plays .dbl").text("一团火");
        $(".plays img").get(0).src="img/plays1.jpg";
        $(".plays video").get(0).src="https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4";
    })
    $(".slixx ul li:nth-child(2)").click(function(){
        play();
        $(".plays").css({"display":"block"});
        $(".body1").css("display","block");
        $(".plays .dbl").text("小米8,一部与众不同的手机");
        $(".plays img").get(0).src="img/plays2.jpg";
        $(".plays video").get(0).src="https://v.mifile.cn/b2c-mimall-media/ed921294fb62caf889d40502f5b38147.mp4";
    })
    $(".slixx ul li:nth-child(3)").click(function(){
        play();
        $(".plays").css({"display":"block"});
        $(".body1").css("display","block");
        $(".plays .dbl").text("小米MIX2s,一面科技一面艺术");
        $(".plays img").get(0).src="img/plays3.jpg";
        $(".plays video").get(0).src="https://v.mifile.cn/b2c-mimall-media/53fc775dd6b29ecd8df3e2ea35129766.mp4";
    })
    $(".slixx ul li:nth-child(4)").click(function(){
        play();
        $(".plays").css({"display":"block"});
        $(".body1").css("display","block");
        $(".plays img").get(0).src="img/plays4.jpg";
        $(".plays .dbl").text("生活中无处不在的小爱同学");
        $(".plays video").get(0).src="https://v.mifile.cn/b2c-mimall-media/69f7b9881f4ed7123f0d473dcd44d621.mp4";
    })
})


