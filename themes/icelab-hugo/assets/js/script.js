
document.addEventListener("DOMContentLoaded", function() {
// Main Script
(function ($) { 'use strict';
	// -----------------------------
	// Document Ready Function
	// -----------------------------
	$(document).ready(function(){
	// 	AOS.init();
	// 	// $('a, .service-item, .scroll-top').hover(function(){
	// 	// 	$('.dot').css('transform' , 'scale(2)');
	// 	// }, function(){
	// 	// 	$('.dot').css('transform' , 'scale(1)');
	// 	// });
	// 	// $(".navbar").headroom();
	// 	// $('.image-tilt').tilt({
	// 	// 	glare: true,
	// 	// 	maxGlare: .5,
	// 	// 	maxTilt: 5
	// 	// })
	// 	// $('.scroll-top').on('click', (function () {
	// 	// 	$('html, body').animate({ scrollTop: 0 }, 800);
	// 	// 	return false;
	// 	// }));
	// 	// $('.testimonial-slider').slick({
	// 	// 	infinite: true,
	// 	// 	autoplay: true,
	// 	// 	prevArrow: "<div class=\"prev-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns: xlink=\"http://www.w3.org/1999/xlink\" width=\"30px\" height=\"7px\"><path fill-rule=\"evenodd\" d=\"M-0.000,7.000 C-0.000,7.000 13.622,-0.000 13.766,-0.000 C13.783,-0.000 14.008,4.011 14.000,3.999 C13.969,3.958 30.131,3.999 30.000,3.999 L30.000,7.000 L-0.000,7.000 L-0.000,7.000 Z\"/></svg></div>",
	// 	// 	nextArrow: "<div class=\"next-arrow\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns: xlink=\"http://www.w3.org/1999/xlink\" width=\"30px\" height=\"7px\"><path fill-rule=\"evenodd\" d=\"M30.000,7.000 C30.000,7.000 19.783,-0.000 19.675,-0.000 C19.663,-0.000 19.494,4.011 19.500,3.999 C19.523,3.958 -0.098,3.999 -0.000,3.999 L-0.000,7.000 L30.000,7.000 L30.000,7.000 Z\"/></svg></div>"
	// 	// });
	// 	// $('a.page-scroll').on('click', function (event) {
	// 	// 	var $anchor = $(this);
	// 	// 	$('html, body').stop().animate({
	// 	// 		scrollTop: ($($anchor.attr('href')).offset().top - 0)
	// 	// 	}, 800);
	// 	// 	event.preventDefault();
	// 	// });
	// 	// init controller
	// 	// var controller = new ScrollMagic.Controller();
	// 	// // loop through all elements
	// 	// $('.less-transform').each(function () {
	// 	// 	// build a tween
	// 	// 	var tween = TweenMax.fromTo($(this), .01, { y: 50 }, { y: -50, ease: Power1.easeIn });
	// 	// 	// build a scene
	// 	// 	var scene = new ScrollMagic.Scene({
	// 	// 		triggerElement: this,
	// 	// 		duration: '100%',
	// 	// 		offset: -300
	// 	// 	})
	// 	// 	.setTween(tween) // trigger a TweenMax.to tween
	// 	// 	.addTo(controller);
	// 	// });

	// 	// $('.big-transform').each(function () {
	// 	// 	// build a tween
	// 	// 	var tween = TweenMax.fromTo($(this), .01, { y: 100 }, { y: -100, ease: Power1.easeIn });
	// 	// 	// build a scene
	// 	// 	var scene = new ScrollMagic.Scene({
	// 	// 		triggerElement: this,
	// 	// 		duration: '100%',
	// 	// 		offset: -300
	// 	// 	})
	// 	// 	.setTween(tween) // trigger a TweenMax.to tween
	// 	// 	.addTo(controller);
	// 	// });

	// 	var $window = $(window);
	// 	// Parallax Backgrounds
	// 	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	// 	$('.parallex[data-type="background"]').each(function () {
	// 		var $bgobj = $(this); // assigning the object
	// 		$(window).scroll(function () {
	// 			// Scroll the background at var speed
	// 			// the yPos is a negative value because we're scrolling it UP!
	// 			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
	// 			// Put together our final background position
	// 			var coords = '50% ' + yPos + 'px';
	// 			// Move the background
	// 			$bgobj.css({ backgroundPosition: coords });
	// 		}); // end window scroll
	// 	});
	// });
	// $(window).on('load', function () {

	// });
	// $(window).on('scroll', (function () {
	// 	var windscroll = $(window).scrollTop();
	// 	if (windscroll >= 100) {
	// 		$('nav').addClass('nav-bg');
	// 	} else {
	// 		$('nav').removeClass('nav-bg');
	// 	}
	// }));

	var arrow_wrapper=$('.arrow-wrapper');
	if($(arrow_wrapper)){
		var prev=$('.arrow-wrapper .prev');
		var next=$('.arrow-wrapper .next');
		var banner_imgs = $('.banner-img-wrapper .banner-img-cnt');
		var banner_img_length = $(banner_imgs).length;
		console.log(banner_img_length);
		$(next).click(function(e) {
			e.preventDefault();
			let active_img=$('.banner-img-wrapper .banner-img-cnt.active').index();
			console.log(active_img);
			if(active_img==banner_img_length-1){
				$(banner_imgs[active_img]).removeClass('active');
				$(banner_imgs[0]).addClass('active');
			}
			else{
				$(banner_imgs[active_img]).removeClass('active');
				$(banner_imgs[active_img+1]).addClass('active');
			}
		});
		$(prev).click(function(e) {
			e.preventDefault();
			let active_img=$('.banner-img-wrapper .banner-img-cnt.active').index();
			console.log(active_img);
			if(active_img==0){
				$(banner_imgs[active_img]).removeClass('active');
				$(banner_imgs[1]).addClass('active');
			}
			else{
				$(banner_imgs[active_img]).removeClass('active');
				$(banner_imgs[active_img-1]).addClass('active');
			}
		});
	}
	var steps_cols = $('.steps-area ul li');
	if($(steps_cols)){
		$(steps_cols).click(function(e) {
			e.preventDefault();
			if($(this).find('.hidden-long-desc').length>0)
			$(this).toggleClass('active');
		});
	}
	var process_cols = $('.process-area ul li');
	if($(process_cols)){
		$(process_cols).click(function(e) {
			e.preventDefault();
			if($(this).find('.hidden-long-desc').length>0)
			$(this).toggleClass('active');
		});
	}

//three columns slider
	var $slick_slider_columns = $('.blog-listing-slider ul');
		if($slick_slider_columns){
			$('.blog-listing-slider ul').slick({
				slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			centerMode: true,
			autoplaySpeed: 8000,
			dots: true,
			arrows: false,
			centerPadding: '20%',
			responsive: [
			{
				breakpoint: 1366,
				settings: {
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false,
					centerPadding: '1%',
				}
			},{
				breakpoint: 992,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}

			]
			});
	}

	});
})(jQuery);

});