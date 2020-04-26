$(function(){

	// $("img.lazyload").lazyload(
	// 	{ data_attribute: "original" 
	// });

	$('.viewmore').click(function() {
		var appsli_length = $('.apps_ul li').length,
			appsli_visible = $('.apps_ul li:visible').length;
		if (appsli_length != appsli_visible) {
            $('.apps_ul li:nth-child(n+' + appsli_visible + ') img.lazyload').lazyload({
				bind: "event"
			});
        }
	});

    // $('.apps_ul li:nth-child(-n+4).notlink').click(function (){
	// 	let eq_id = $(this).index();
	// 	let eq_arr = [ 'pos', 'covid', 'userlist', 'todo' ];
	// 	if (eq_id == 0) {
	// 		$('#modal_iframe').attr({src: eq_arr[eq_id] + '/index.html'});
	// 		$('.modal_link a').attr({href: 'https://codeyuri.github.io/' + eq_arr[eq_id] + '/'});
    //    		$('.modal_link span').html('https://codeyuri.github.io/' + eq_arr[eq_id] + '/');
	// 	} else if (eq_id == 1) {
	// 		$('#modal_iframe').attr({src: eq_arr[eq_id] + '/index.html'});
	// 		$('.modal_link a').attr({href: 'https://codeyuri.github.io/' + eq_arr[eq_id] + '/'});
    //    		$('.modal_link span').html('https://codeyuri.github.io/' + eq_arr[eq_id] + '/');
	// 	} else {
	// 		$('#modal_iframe').attr({src: 'portfolio/' + eq_arr[eq_id] + '/index.html'});
	// 		$('.modal_link a').attr({href: 'https://codeyuri.github.io/portfolio/' + eq_arr[eq_id] + '/'});
	// 		$('.modal_link span').html('https://codeyuri.github.io/portfolio/' + eq_arr[eq_id] + '/');
	// 	}
	// 	$('.show_portfolio').fadeIn();
	// });

    $('.apps_ul li.notlink').click(function (){
		let eq_id = $(this).index();
		let eq_arr = [ 'pos', 'covid', 'userlist', 'todo' ];
		$('#modal_iframe').attr({src: 'portfolio/' + eq_arr[eq_id] + '/index.html'});
		$('.modal_link a').attr({href: 'https://codeyuri.github.io/portfolio/' + eq_arr[eq_id] + '/'});
		$('.modal_link span').html('https://codeyuri.github.io/portfolio/' + eq_arr[eq_id] + '/');
		$('.show_portfolio').fadeIn();
	});

	// this is only for my dummy portfolio
	$('.apps_ul li.dummy').click(function (){
        $('#modal_img').attr({src: 'assets/images/dummy.jpg', alt: 'dummy image'});
		$('.show_portfolio2').fadeIn();
	});
	
	$('.ach_imgs li').click(function (){
		let eq_id = $(this).index();
		if ( eq_id >= 3 ) {
			$('#modal_img').attr({src: 'assets/images/dummy.jpg', alt: 'dummy image'});
		} else {
			$('#modal_img').attr({src: 'assets/images/btm-img' + (eq_id+1) + '.jpg', alt: 'certificate'});
		}
		$('.show_portfolio2').fadeIn();
	});

    $('.modal_close').click(function (){
        $('.show_portfolio').fadeOut();
	});

	$('.modal_close2').click(function (){
        $('.show_portfolio2').fadeOut();
	});

	$('.viewmore').click(function () {
		$('.viewless').show();
        $('.apps_ul li:hidden').slice(0, 4).fadeIn();
        if ($('.apps_ul li').length == $('.apps_ul li:visible').length) {
            $('.viewmore ').hide();
        }
	});
	
	$('.viewless').click(function () {
		$('.viewmore').show();
        $('.apps_ul li:visible').slice(-4).fadeOut();
        if ($('.apps_ul li').length == $('.apps_ul li:hidden').length + 8) {
            $('.viewless ').hide();
        }
    });

	//para sa sidebar nav
	var open = false;

    var openSidebar = function(){
		$('body, nav, .nav_con, .nav_toggle, .apps_ul, .apps_ul li, .ach_imgs, .ach_imgs li, .swipe_me, .playmusic').addClass('active');
		$('nav_toggle').addClass('lightmode');
		open = true;
	}

	var closeSidebar = function(){
		$('body, nav, .nav_con, .nav_toggle, .apps_ul, .apps_ul li, .ach_imgs, .ach_imgs li, .swipe_me, .playmusic').removeClass('active');
		$('nav_toggle').removeClass('lightmode');
		open = false;
	}

	$('.nav_toggle').click( function(event) {
		event.stopPropagation();
		var toggle = open ? closeSidebar : openSidebar;
		toggle();
	});

	$(document).click( function(event){
		if ( !$(event.target).closest('.nav_con').length ) {
			closeSidebar();
		}
	});

	$('.nav_list li a').click(function () {
		closeSidebar();
		$("html, body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 60
		}, 1000);
	});

	$('.nav_list li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	$(".nav_con").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingers)
			{
				if (phase=="move" && direction =="right") {
					openSidebar();
					return false;
				}
				if (phase=="move" && direction =="left") {
					closeSidebar();
					return false;
				}
			},
		allowPageScroll:"vertical"
	});
	
	// end sidebar nav

	setTimeout(function(){
		$('.loader_div').fadeOut(1000);
	}, 1000);

	setTimeout(function(){
		$('.mode_msg ').addClass('hidden');
	}, 3000);

	// $('.back_to_top').click(function () {
	// 	$("html, body").animate({
	// 		scrollTop: 0
	// 	}, 900);
	// 	return false;
	// });

	// $(window).scroll(function(){
	// 	var windowScroll = $(this).scrollTop(),
	// 		webHeight = $(document).height(),
	// 		window_width = $(window).width();

	// 		if (windowScroll > (webHeight * 0.5) && window_width <= 600 ) {
	// 			$(".back_to_top").fadeIn();
	// 		} else{
	// 			$(".back_to_top").fadeOut()
	// 		};

	// 		if($('.mode_msg').hasClass('active')) {
	// 			$('.back_to_top').addClass('active');
	// 		} else {
	// 			$('.back_to_top').removeClass('active');
	// 		}

	// });

	var audio = new Audio('https://codeyuri.github.io/assets/music/deadman.mp3');
	$('.playmusic').click(function(){
		$(this).toggleClass("paused");
		if (audio.paused == false) {
			audio.pause();
		} else {
			audio.play();
		}
	});

	$("#sendbtn").on("click", function() {
		var f_msg = document.getElementById('f_msg').value;
		var f_name = document.getElementById('f_name').value;
		var f_email = document.getElementById('f_email').value;
		var formerror = document.getElementById('formerror');

		if (f_msg == '' || f_name == '' || f_email == '' ) {
			formerror.style.display = 'block';
			formerror.style.animation = '1s formerror';

			setTimeout(function(){
				formerror.style.animation = 'none';
			}, 200);
			return false;
		}
		else {
			$.ajax({
				url: "https://formspree.io/xqkdgdal", 
				method: "POST",
				data: {message: f_msg, _name: f_name, _replyto: f_email},
				dataType: "json"
			});
		}
		var f_msg = '',
			f_name = '',
			f_email = '';
		formerror.style.display = 'none';
		alert('Thanks for the email, I\'ll be in touch promptly.');
    	// return false;
	});

	$('.aboutme_div li').hover(
		function(e) {
			$('.mode_msg.lightmode.hidden .togglebtn').addClass('override')
		},
		function(e) {
			$('.mode_msg.lightmode.hidden .togglebtn').removeClass('override')
		}
	);

	$('.mode_msg .togglebtn, #contactmelink').click(function (){
		$('.mode_msg, mode_msg .togglebtn, .mode_msg div').toggleClass('hidden').toggleClass('active');
	})

	var hideLightmodeMsg = function(){
		$('.mode_msg, mode_msg .togglebtn, .mode_msg div').addClass('hidden').removeClass('active');
		open = false;
	}

	var showLightmodeMsg = function(){
		$('.mode_msg, mode_msg .togglebtn, .mode_msg div').removeClass('hidden').addClass('active');
		open = false;
	}

	$(".mode_swipe").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingers)
			{
				if (phase=="move" && direction =="down") {
					hideLightmodeMsg();
					return false;
				}
				if (phase=="move" && direction =="up") {
					showLightmodeMsg();
					return false;
				}
			},
		allowPageScroll:"vertical"
	});

	var lightmode = true;

	var addLightmode = function(){
		$(':root, .nav_toggle, .nav_toggle.active, .nav_con h2, .nav_list li a, .contact_info a, .social_media a, .apps_ul li, .apps_ul li:hover, .apps_ul li span, .modal_close, .modal_close2, #modal_iframe, #modal_img, .aboutme_imgs, .ach_imgs li, .ach_imgs li:hover, #bottom, footer, .footer_con, .back_to_top, .mode_msg, .skills').addClass('lightmode')
		lightmode = true;
	}

	var removeLightmode = function(){
		$(':root, .nav_toggle, .nav_toggle.active, .nav_con h2, .nav_list li a, .contact_info a, .social_media a, .apps_ul li, .apps_ul li:hover, .apps_ul li span, .modal_close, .modal_close2, #modal_iframe, #modal_img, .aboutme_imgs, .ach_imgs li, .ach_imgs li:hover, #bottom, footer, .footer_con, .back_to_top, .mode_msg, .skills').removeClass('lightmode')
		lightmode = false;
	}

	$(document).dblclick(function () {
		// event.stopPropagation();
		var toggle = lightmode ? removeLightmode : addLightmode
		toggle();
		clearSelection()
	});

	function clearSelection() {
		if(document.selection && document.selection.empty) {
			document.selection.empty();
		} else if(window.getSelection) {
			var sel = window.getSelection();
			sel.removeAllRanges();
		}
	}

});
// end of my own jquery plugins