$(function () {
	if ($(window).width() > 1025) {
		var Height = $(window).height();
		// alert(Height);
		$('.slides li').height(Height);
		$("#help1_content").height(Height);
			$(".productbg ").height(Height);
		$('#dowebok').fullpage({
			scrollingSpeed: 400,
			css3: true,
			resize: true,
			anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8", "page9", "page10", "page11", "page12", "page13", "page14", "page15", "page16", "page17"],
			verticalCentered: false,
			afterRender: function () {
				$("#home").css({ "display": "block" }).addClass("home_zoom");
				$("#header nav li ").eq(0).addClass("navActive").siblings().removeClass("navActive");

			},
			afterLoad: function (anchorLink, index) {
				if (index == 1) {
					$("#header nav li ").eq(0).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 2) {
					$("#header nav li ").eq(0).addClass("navActive").siblings().removeClass("navActive");
					//服务模块轮播
					var deployIndex = 0, timerIndex;
					function deployAuto(time) {
						//$('.rotate-circle').delay(400).addClass('animation');
						timerIndex = setInterval(function () {
							deployIndex++;
							if (deployIndex == 4) {
								deployIndex = 0
							}
							$('#index-deploy-content').removeClass().addClass('deploy-index-' + deployIndex);

							/*$('.rotate-circle').removeClass('animation');
							setTimeout(function () {
								$('.rotate-circle').addClass('animation');
							},1000);*/
						}, time);
					}
					deployAuto(5000);
					$('.index-deploy-item').hover(function () {
						//$('.rotate-circle').removeClass('animation');
						clearInterval(timerIndex);
						deployIndex = $(this).attr('deploy-index');
						$('#index-deploy-content').removeClass().addClass('deploy-index-' + deployIndex);
					}, function () {
						deployAuto(5000);
					});
					// $('.index-product-item').hover(function () {
					// 	//$('.rotate-circle').removeClass('animation');
					// 	clearInterval(timerIndex);
					// 	deployIndex = $(this).attr('deploy-index');
					// 	$('#index-product-content').removeClass().addClass('deploy-index-' + deployIndex);
					// }, function () {
					// 	deployAuto(5000);
					// });
				}
				if (index == 3) {

					$("#header nav li ").eq(0).addClass("navActive").siblings().removeClass("navActive");
					// $(".shencontent").html('<div class="green"><strong>823536</strong> <span>用户访问量</span></div><div class="red"><strong>723536</strong><span>用户使用数</span></div><div class="orange"><strong>523536</strong><span>网络测试数</span></div><div class="purple"><strong>623536</strong><span>已服务客户</span></div>');
					// console.log(parseInt($(".shencontent strong").eq(0).html()) + parseInt(10 * Math.random()));



					$(".shencontent>div").animate({ marginTop: "40px" }, 50, function () {
						$(".shencontent>div").animate({ marginTop: "0" }, 800)
					});
				}
				if (index == 4) {
					$("#header nav li ").eq(0).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 5) {
					$("#header nav li ").eq(0).addClass("navActive").siblings().removeClass("navActive");
					var partnerhtml = '<div class="partner11">'
						+ '  <img src="image/index/partner1.png" alt="">'
						+ '<img src="image/index/partner2.png" alt="">'
						+ '<img src="image/index/partner3.png" alt="">'
						+ '<img src="image/index/partner4.png" alt="">'
						+ '<img src="image/index/partner5.png" alt="">+   </div>'
						+ '<div class="partner11">'
						+ '  <img src="image/index/partner6.png" alt="">'
						+ '<img src="image/index/partner7.png" alt="">'
						+ '<img src="image/index/partner8.png" alt="">'
						+ '<img src="image/index/partner9.png" alt="">+   </div>'
						+ '<div class="partner11">'
						+ '  <img src="image/index/partner10.png" alt="">'
						+ '<img src="image/index/partner11.png" alt="">'
						+ '<img src="image/index/partner12.png" alt="">+   </div>'
						+ '<div class="partner11">'
						+ '  <img src="image/index/partner13.png" alt="">'
						+ '<img src="image/index/partner14.png" alt="">+   </div>'
					$(".partner").html(partnerhtml);
					$('.partner11 img').animate({ height: '50px' }, 1000);
				}
				if (index == 6) {
					$("#header nav li ").eq(1).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 7) {
					$("#header nav li ").eq(1).addClass("navActive").siblings().removeClass("navActive");
					//服务模块轮播
					var deployIndex = 0, timerIndex;
					function deployAuto1(time) {
						//$('.rotate-circle').delay(400).addClass('animation');
						timerIndex = setInterval(function () {
							deployIndex++;
							if (deployIndex == 5) {
								deployIndex = 0
							}
							$('#index-product-content').removeClass().addClass('deploy-index-' + deployIndex);
							/*$('.rotate-circle').removeClass('animation');
							setTimeout(function () {
								$('.rotate-circle').addClass('animation');
							},1000);*/
						}, time);
					}
					deployAuto1(4000);
				}
				if (index == 8) {
					$("#header nav li ").eq(2).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 9) {
					$("#header nav li ").eq(3).addClass("navActive").siblings().removeClass("navActive");
					$(".price11 h1").after("<div class='title_en'></div>");
					$(".title_en").animate({ width: "60px" }, 800);
				}
				if (index == 10) {
					$("#header nav li ").eq(4).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 11) {
					$("#header nav li ").eq(4).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 12) {
					$("#header nav li ").eq(4).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 13) {
					$("#header nav li ").eq(4).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 14) {
					$("#header nav li ").eq(5).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 15) {
					$("#header nav li ").eq(5).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 16) {
					$("#header nav li").eq(6).addClass("navActive").siblings().removeClass("navActive");
				}
				if (index == 17) {
					$("#header nav li").eq(6).addClass("navActive").siblings().removeClass("navActive");
					$('help1').scroll(function () {
						// if($(document).scrollTop()< $("#header").height()){
						//     $(".tocify").css("position","absolute");
						//     $(".tocify").css("top",$("#navbar").height()+10+"px");
						// }else{
						$("help1_content>div").css("paddingTop", "200px");
						// $(".tocify").css("top",$("#header").height()+10+'px');
						// }
					})
				}
			},
			onLeave: function (index, nextIndex, direction) {
				if (index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 9) {
					$(".title_en").remove();

				}
			}
		});
	} else {
		$(".section").height(662);
		$("body").css({ "overflow": "auto" });
		$("#dowebok").css({ "height": 1750 });
		$("#help_content").css({ "height": 662 });
		$("#footer").css({ "height": '20%' });

		//$("#dowebok").height(662*17);
		//服务模块轮播
		var deployIndex = 0, timerIndex;
		function deployAuto(time) {
			//$('.rotate-circle').delay(400).addClass('animation');
			timerIndex = setInterval(function () {
				deployIndex++;
				if (deployIndex == 4) {
					deployIndex = 0
				}
				$('#index-deploy-content').removeClass().addClass('deploy-index-' + deployIndex);
				/*$('.rotate-circle').removeClass('animation');
				setTimeout(function () {
					$('.rotate-circle').addClass('animation');
				},1000);*/
			}, time);
		}

		deployAuto(5000);
		$('.index-deploy-item').hover(function () {
			//$('.rotate-circle').removeClass('animation');
			clearInterval(timerIndex);
			deployIndex = $(this).attr('deploy-index');
			$('#index-deploy-content').removeClass().addClass('deploy-index-' + deployIndex);
		}, function () {
			deployAuto(5000);
		});
		$(".shencontent").html('<div class="green"><strong>823,536</strong> <span>用户访问量</span></div><div class="red"><strong>723,536</strong><span>用户使用数</span></div><div class="orange"><strong>523,536</strong><span>网络测试数</span></div><div class="purple"><strong>623,536</strong><span>已服务客户</span></div>');
		$(".shencontent>div").animate({ marginTop: "0" }, 800);

		var partnerhtml = '<div class="partner11">'
			+ '  <img src="image/index/partner1.png" alt="">'
			+ '<img src="image/index/partner2.png" alt="">'
			+ '<img src="image/index/partner3.png" alt="">'
			+ '<img src="image/index/partner4.png" alt="">'
			+ '<img src="image/index/partner5.png" alt="">+   </div>'
			+ '<div class="partner11">'
			+ '  <img src="image/index/partner6.png" alt="">'
			+ '<img src="image/index/partner7.png" alt="">'
			+ '<img src="image/index/partner8.png" alt="">'
			+ '<img src="image/index/partner9.png" alt="">+   </div>'
			+ '<div class="partner11">'
			+ '  <img src="image/index/partner10.png" alt="">'
			+ '<img src="image/index/partner11.png" alt="">'
			+ '<img src="image/index/partner12.png" alt="">+   </div>'
			+ '<div class="partner11">'
			+ '  <img src="image/index/partner13.png" alt="">'
			+ '<img src="image/index/partner14.png" alt="">+   </div>'
		$(".partner").html(partnerhtml);
		$('.partner11 img').animate({ height: '50px' }, 1000);

	}
});
setInterval(function () {
	$('.shencontent>div strong').each(function (index, Ele) {
		sum = parseInt($(Ele).html()) + parseInt(10 * Math.random());
		$(Ele).html(sum);
	});
}, 60000)

//内容适应居中
var size = $(function () {
	$("#home_content").css({ "padding-top": ($(".active").height() - $("#home_content").height()) / 6 });
	$("#about_content").css({ "padding-top": ($(".active").height() - $("#about_content").height()) / 6 });
	$("#skill_content").css({ "padding-top": ($(".active").height() - $("#skill_content").height()) / 6 });
	$("#exp_content").css({ "padding-top": ($(".active").height() - $("#exp_content").height()) / 6 });
	$("#demo_content").css({ "padding-top": ($(".active").height() - $("#demo_content").height()) / 6 });
});
$(window).resize(function () {
	$(window).size();
});