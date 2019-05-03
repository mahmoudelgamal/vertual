$(function(){


// start nice scroll
$('html').niceScroll();

// start color option
	
	$('.fa-gear').click(function(){
		$('.color-option').fadeToggle()
		})
		
		
	$('.color-option ul li')
	.eq(0).css('background-color','#DC1A1A').end()
	.eq(1).css('background-color','#2a7139').end()
	.eq(2).css('background-color','#de8415').end()
	.eq(3).css('background-color','#1c8dcf')
	
	$('.color-option ul li').click(function(){
		$("link[href*='theme']").attr("href",$(this).attr('data-value'))
		})
		
// start spinner

      $('.overlay .loader').fadeOut(2000,function(){
		  $('.overlay .loader').parent().fadeOut(2000,function(){
			  $('body').css('overflow','auto',function(){
				  $('.overlay ').remove()
				  })
			  })
		  
		  })
// statr scroll button
   $(window).scroll(function(){
	   if($(window).scrollTop()>=700){
		  $('#scrolltop').fadeIn()
		   }else
		   { $('#scrolltop').hide()}
	   });
	   
	$('#scrolltop').click(function(){
		$('html,body').animate({scrollTop:0},1000)
		})
		

	})
	
	/*(function animateScroll(){
		
			$('#scrolltop').animate({
				position:'relative',
				top:'30px'
		
				},1000,function(){
				$('#scrolltop').animate({
					bottom:'20px'
					},1000,function(){
						animateScroll();
						})	
					})
			}())
		*/