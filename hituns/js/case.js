$('.case1').hover(function(){
   // console.log("111")
     $(".case1").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
})