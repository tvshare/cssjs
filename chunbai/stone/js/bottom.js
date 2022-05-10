$(function() {
   var h = window.innerWidth;
       if (h <= 768) {
           slideNavAutoPosition(".main-nav .swiper-wrapper");
        }
            function slideNavAutoPosition(a) {
                var m = document.querySelector(a);
                var l = m.offsetWidth;
                var e = m.getElementsByClassName("active")[0];
                var j = b();
                if (e && j > l) {
                    var f = e.offsetLeft;
                    var i = j - e.offsetLeft - e.offsetWidth;
                    var k = l / 2;
                    if (i < k) {
                        m.style.transform = "translate3d(" + -(j - l) + "px,0px,0px)"
                    } else {
                        if (f >= k) {
                            var g = e.offsetWidth;
                            var d = f + g / 2;
                            var c = d - k;
                            m.style.transform = "translate3d(" + -c + "px,0px,0px)"
                        }
                    }
                }
                function b() {
                    var o = 0;
                    var p = m.getElementsByClassName("swiper-slide");
                    for (var n = 0; n < p.length; n++) {
                        o += p[n].offsetWidth
                    }
                    return o
         }
     };
    //影视推荐轮播
	var swiper = new Swiper('.box-slide', {
		pagination: '.swiper-pagination',
		lazyLoading: true,
		preventClicks: true,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
		autoplay: 3000,
		loop: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});

    //专题滑动
    new Swiper('.new-special .list-wrap', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true
    });
	
	//主导航滑动
	new Swiper('.main-nav.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true,
	});

	//子导航按钮滑动
	new Swiper('.hd-nav .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true
	});

	//tips垂直轮播
	new Swiper('.rolling-tips', {
		direction: 'vertical',
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,//手动滑动后依然可以再自动轮播
	});

	//电影、电视剧列表标题行子分类滑动
	new Swiper('.sub-category', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true
	});
 //点击顶部微信图标好更多按钮
    $('.gzh>a,.more-nav>a').click(function (e) {
        e.stopPropagation();
        console.log(this);
        if ($(this).next().is(':visible')) {
            $(this).next().removeAttr('style');
        } else {
            $(this).next().attr('style','display: block!important;');
        }
    });
    $('body').click(function () {
        $('.shadow-triangle-box').removeAttr('style');
    });
    //资源tab按钮滑动
    new Swiper('.resource-box-nav', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true
    });
    //鼠标划过资源tab按钮切换
    $('.resource-box-nav .tab-nav').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('.resource-box .rb-item').eq($(this).parent().index()).fadeIn(500).siblings().hide();
    });
	
    //鼠标滑过猜你喜欢
	$(document).ready(function() {
		$(".detailplay .theme a").bind("click", function() {
			var e = $(this).index(),
				a = $(".detailplay .content > ul");
			$(this).removeClass("active").addClass("active").siblings().removeClass("active");
			a.hide();
			a.eq(e).show();
		})
	});

	
});

$(function(){

	$(".float-box").hide();
	$(function(){
	
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$(".float-box").fadeIn();
			}else{
				$(".float-box").fadeOut();
			}
		});
		
		$("#goTop").click(function(){
			$('body,html').animate({scrollTop:0},500);
			return false;
		});
		
	});
	
}); 