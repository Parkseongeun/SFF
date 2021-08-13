// 메인 - 세션 탭 슬라이드
var menu = ['Door to Technology','Door to Customer','Door to Industry'];
var swiper = new Swiper(".box__tab-session", {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	autoHeight: true,
	preloadImages: true,
	speed: 400,
    autoplay: 4000,
	autoplayStopOnLast: true,
    loop: true,
	pagination: ".box__tab-session .swiper-pagination",
	paginationBulletRender: function (index, className) {
		return '<span class="' + className + '" id="GETDICT_MAIN_TAB_' + (index+1) + '">' + (menu[index]) + '</span>';
	},
	paginationClickable: true
});

// Scroll시 Fadein 효과
var scrollFadeEffect = function(){
	$('.fade-in').each( function(i){
		var bottom_of_element = ($(this).offset().top + $(this).outerHeight()) - ($(this).outerHeight()/3);
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		if( bottom_of_window > bottom_of_element ){
			$(this).animate({'opacity':'1','top':'0'}, 500);
		}
	}); 
}

$(function(){

	// 공통 - 위로가기
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200 ) {
			$('.button__gotop').fadeIn('fast');
		} else {
			$('.button__gotop').fadeOut('fast');
		}
	});
	$('.button__gotop').click(function(){
		$('html, body').animate( { scrollTop : 0 }, 400 );
		return false;
	});

	// 메인 - 네트워킹 - 연사 상세
	$('.list__networking-person .button__info').click(function(){
		$(this).parent().siblings().find('.box__info').hide();
		$(this).siblings('.box__info').toggle();
	});

	// 공통 - GNB (Mobile)
	$('.button__gnb').click(function(){
		$('.header .box__nav--header').addClass('js-open');
		$('body').addClass('js-scroll-fixed');
	});
	$('.header .box__nav--header .button__close').click(function(){
		$('.header .box__nav--header').removeClass('js-open');
		$('body').removeClass('js-scroll-fixed');
	});

	scrollFadeEffect();
    $(window).scroll( function(){
		var time = setTimeout(function(){
			clearTimeout(time);
			scrollFadeEffect();
		},100)
    });

});