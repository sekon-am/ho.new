//jQuery(document).ready(function($) {

$(window).load(function() {
	
	$('#loading-screen').delay(300).fadeOut(700);
	
	// INIT SLIDE HEIGHT
    $('.slide').css('height', $(window).height()+'px');
    
    
    // SCROLL TO SCREEN
	function ScrollPageToURL(){
        
        var url = window.location.hash;
        
        var scrollTo = 0;
        if ( url == '#slide-1' ){
        	scrollTo = $('#slide-1').offset().top;
        } 
        else if ( url == '#slide-2' ){
        	scrollTo = $('#slide-2').offset().top;
        } 
        else if ( url == '#slide-3' ){
        	scrollTo = $('#slide-3').offset().top;
        } 
        else if ( url == '#slide-4' ){
        	scrollTo = $('#slide-4').offset().top;
        } 
        else if ( url == '#slide-5' ){
        	scrollTo = $('#slide-5').offset().top;
        } 
        else if ( url == '#slide-6' ){
        	scrollTo = $('#slide-6').offset().top;
        } 
        else if ( url == '#slide-7' ){
        	scrollTo = $('#slide-7').offset().top;
        }
        $(url).css('zIndex',1).mobj({y:1});
        $("#o_0").mobj({y:1});
        
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: scrollTo}, 10);
		
	} ScrollPageToURL();
    
    
    function INIT_MAIN_MENU(){
        
        var menu_pointer_start_margin = parseInt($('#menu-poiner').css('margin-top'));
        
        var count_menu_items = $('#menu-items>.menu-item').size();
        
        var menu_item_height = $('#menu-items>.menu-item').height();
        
        var first_item_margin_top = 0;
        
        var pointer_margin_top = 0;
        
        var pointer_end_margin_top = 0;
        
        var pointer_offset = parseInt($('#menu-poiner').css('margin-top'));
        
        // MARKUP MENU ITEMS
        function InitMenuItems(){

            var menu_items_height = $('#menu-container').height()-151;
            
            $('#menu-items').height(menu_items_height+'px');

            first_item_margin_top = Math.round((menu_items_height-(menu_item_height*count_menu_items))/4);
            
            var item_margin_top = Math.round((first_item_margin_top*2)/(count_menu_items-1));
            
            $('#menu-items>.menu-item').css({'margin-top': item_margin_top+'px'});
            
            $('#menu-items>.menu-item:first').css({'margin-top': first_item_margin_top+'px'});

            pointer_margin_top = first_item_margin_top+pointer_offset;            
            
            $('#menu-poiner').css({'margin-top': pointer_margin_top+'px'});
            
            pointer_end_margin_top = (menu_item_height*(count_menu_items-1))+(item_margin_top*(count_menu_items-1));
            
        } InitMenuItems();
        
    
        // MAIN MENU LINK ANIMATIION

        $(".menu-item").click(function(){
        	
        	var href = $(this).attr("href");
            
            var ScrollValue = $(href).offset().top;
            
            var scrollSpeed = 400;

            $("html:not(:animated),body:not(:animated)").animate({scrollTop: ScrollValue}, scrollSpeed);

        	setTimeout( function(){
        		 
        		window.location.hash = href;
        		
        	}, scrollSpeed);
  
  			return false;        
            
        });
       
        // MOVE POINTER BY SCROLL

        function MovePointerByScroll(){
            
            var HTMLHeight = $(document).height();
            
            var slide_height = $(window).height();
            
            var end_scroll_pos_persent = (slide_height*($('.slide').size()-1))/(HTMLHeight/100);
            
            var PointerLengthOnePercent = pointer_end_margin_top/end_scroll_pos_persent;
            
            function MoveMenuPointer(){
                
                var pos = $(window).scrollTop();

                var PointerPos = ((pos/(HTMLHeight/100))*PointerLengthOnePercent)+first_item_margin_top+pointer_offset;
                
                $('#menu-poiner').css('margin-top', PointerPos+'px');
  
                function addZeros(n, needLength){
                  needLength = needLength || 3;
                  n = String(n);
                  while (n.length < needLength){
                    n = "0" + n;
                  }
                  return n
                }
                
                var pointer_text = (addZeros((pos/7).toFixed(0))).substring(0,3);
                
                function SetPointerDigits(DIGITS){
                    var dFirst = DIGITS.charAt(0);
                    var dSecond = DIGITS.charAt(1);
                    var dThird = DIGITS.charAt(2);
                    $('#menu-poiner>li').eq(0).find('div').attr('class', 'd'+dFirst);
                    $('#menu-poiner>li').eq(1).find('div').attr('class', 'd'+dSecond);
                    $('#menu-poiner>li').eq(2).find('div').attr('class', 'd'+dThird);
                }
                
                SetPointerDigits(pointer_text);
                
            }      
    
            $(window).bind('scroll', MoveMenuPointer);
            
        }
        MovePointerByScroll(); 


    } 
    
    INIT_MAIN_MENU();


	// PARALAX BACKGROUNDS INIT
	//$('#slide-1').parallax("50%", 0.75);
	//$('#slide-2').parallax("50%", 0.5);
	//$('#slide-3').parallax("50%", 0.1);
	//$('#slide-4').parallax("50%", 1.2);
	//$('#slide-5').parallax("50%", 0.1);
	//$('#slide-6').parallax("50%", 0.1);
	//$('#slide-7').parallax("50%", 0.1);
	
	// RUN IN SWIMMING
	$('#fish_yb_small').ammo({speed: 19});
	$('#fish_orange_01').ammo({speed: 25});
	$('#fish_orange_02').ammo({speed: 30});
	$('#fish_orange_03').ammo({speed: 28});
	$('#fish_yb').ammo({speed: 27});
	$('#shark').ammo({speed: 16});
	$('#fish_bw').ammo({speed: 23});
	$('#fish_yellow_01').ammo({speed: 32, destination: 'toLeft'});
	$('#fish_yellow_02').ammo({speed: 38, destination: 'toLeft'});
	
	// MOVE OBJECT BY SCROLL
    $('#logo').mobj({x:0,y:0.9},{min:{y:'10%'},max:{y:600}});
    $('#kid').mobj({x:0,y:0.6},{min:{y:'15%'},max:{y:400}});
    
    $('#fish_yellow1').mobj({x:-0.05,y:0.4});
    $('#fish_yellow2').mobj({x:-0.05,y:0.2});
    $('#fish_yellow3').mobj({x:-0.1,y:0.3});
    $('#fish_blue1').mobj({x:0.15,y:-0.3});
    $('#fish_blue2').mobj({x:0.25,y:-0.2});

    $('#scr3-aq-man').mobj({x:0,y:0.3},{min:{y:'current'}});
	
function clearSelection() {
  try {
    window.getSelection().removeAllRanges();
  } catch(e) {
    document.selection.empty(); // IE<9
  }
}
	$('#slide1,#slide1 img,#slide1 div').bind('selectstart', function(){ clearSelection();return false; }).mousedown(function(){clearSelection();return false;});

	// SCREEEN 2 CAROUSEL

	var carScr2 = $('.slide').height()+100;
	$('#slide-2-carousel').css('height', carScr2+'px');
	function chAqua(num) {
		$('#scr2-aq-description li').hide();
		$('#scr2-aq-description li[data-num="'+num+'"]').show();
		var item=$('#slide-2-carousel img[data-num='+num+']'),
			carousel=$('#slide-2-carousel');
		$('#s2-coralls')
			.attr({class:'s2-coralls-'+num})
			.css({
				width:item.width()+'px',
				height:item.height()+'px',
				left:item.position().left+'px',
				top:item.position().top+'px'
			});
		$('#s2-scheme').attr({class:'s2-scheme-'+num});
	}
	var $s2_current = $('#slide-2-carousel img[data-num="1"]')
	var s2_img_num=1;
	function s2_rotate() {
		if($s2_current) {
			var s2_img_num_prev=s2_img_num;
			if(++s2_img_num>5){
				s2_img_num=1;
			}
			var re = new RegExp(s2_img_num_prev+'.png',"g");
			$s2_current.attr({src:$s2_current.attr('src').replace(re,s2_img_num+'.png')});
		}
		return setTimeout(s2_rotate,3000);
	}
	var slide_2_carousel = $("#slide-2-carousel").waterwheelCarousel({
	  startingItem: 1,
	  flankingItems: 3,
	  separation: parseInt((carScr2/640)*180),
	  separationMultiplier: 0.4, 
	  edgeFadeEnabled: true,
	  speed: 400,
	  //opacityMultiplier: 0.7,
	  horizonOffsetMultiplier: 1.15,
	  sizeMultiplier: 0.6,
	  horizon: 0,
	  horizonOffset: -120,
	  orientation: 'vertical',
	  movingToCenter: function ($item){
		$s2_current.attr({src:'wp-content/themes/homeocean2014/images/slide-2/aq_large_type_0'+$s2_current.attr('data-num')+'_01.png'});
		$s2_current = null;
	    $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
	  },
	  movedToCenter: function ($item){
		$s2_current = $item;
		s2_img_num=1;
		var num=$s2_current.attr('data-num');
		$('#scr2-aq-description li').hide();
		$('#scr2-aq-description li[data-num="'+num+'"]').show();
		$('#s2-scheme'). css({background:'url(wp-content/themes/homeocean2014/images/slide-2/0'+num+'_base_edges.jpg) 0 0 no-repeat'});
		$('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
	  },
	  movingFromCenter: function ($item){
	    $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
	  },
	  movedFromCenter: function ($item){
	    $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
	  },
	  clickedCenter: function ($item){
	    $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
	  }
	}),
		$s2_prev_el = $('#slide-2-item-1');
	
	$('#slide-2-prev').bind('click', function () {
	  slide_2_carousel.prev();
	  return false;
	});
	
	$('#slide-2-next').bind('click', function () {
	  slide_2_carousel.next();
	  return false;
	});
	chAqua(1);
	s2_rotate();


    // SCREEN 3 DESIGN
    
    
    /// Left
    $('#scr3-left-orange-fish-x2').ammo({speed: 38, destination: 'toLeft'});
    $('#scr3-left-big-orange-fish').ammo({speed: 25, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-1').ammo({speed: 40, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-2').ammo({speed: 45, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-3').ammo({speed: 42, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-4').ammo({speed: 39, destination: 'toLeft'});
    $('#scr3-left-right-blue-fish-5').ammo({speed: 47, destination: 'toLeft'});

    /// Right
    $('#scr3-rb-fish-1').ammo({speed: 40});
    $('#scr3-rb-fish-2').ammo({speed: 42});
    $('#scr3-rb-fish-3').ammo({speed: 44});
    $('#scr3-rb-fish-4').ammo({speed: 39});
    $('#scr3-rb-fish-5').ammo({speed: 45});
    $('#scr3-rb-fish-6').ammo({speed: 47});
    $('#scr3-rb-fish-7').ammo({speed: 43});
    $('#scr3-blue-fish-small').ammo({speed: 22});
    $('#scr3-blue-fish').ammo({speed: 26});
    $('#scr3-purple-fish').ammo({speed: 28});
    
    /// SEE AQ
    $('#scr3-navigation>.arrow-left').click(function(){
       
       $('#scr3-navigation>.arrow-left').animate({opacity: 1}, 500);
       $('#scr3-navigation>.arrow-right').animate({opacity: 0.4}, 500);
       
       $('#scr3-navigation>.full-story-left').removeClass('full-story-visible');
       $('#scr3-navigation>.full-story-right').addClass('full-story-visible');
       
       $('#scr3-right-left-corals').fadeOut(500);
       $('#scr3-right-right-corals').fadeOut(500);
       
       $('#scr3-left-left-corals').fadeIn(500);
       $('#scr3-left-right-corals').fadeIn(500);

       $('#scr3-bubles-left').fadeIn(500);
       $('#scr3-bubles-right').fadeOut(500);
       
       $('#scr3-left-big-orange-fish').fadeIn(500);
       $('#scr3-left-orange-fish-x2').fadeIn(500);
       $('#scr3-left-right-blue-fish-1').fadeIn(500);
       $('#scr3-left-right-blue-fish-2').fadeIn(500);
       $('#scr3-left-right-blue-fish-3').fadeIn(500);
       $('#scr3-left-right-blue-fish-4').fadeIn(500);
       $('#scr3-left-right-blue-fish-5').fadeIn(500);
       
       $('#scr3-blue-fish-small').fadeOut(500);
       $('#scr3-rb-fish-1').fadeOut(500);
       $('#scr3-rb-fish-2').fadeOut(500);
       $('#scr3-rb-fish-3').fadeOut(500);
       $('#scr3-rb-fish-4').fadeOut(500);
       $('#scr3-rb-fish-5').fadeOut(500);
       $('#scr3-rb-fish-6').fadeOut(500);
       $('#scr3-rb-fish-7').fadeOut(500);
       $('#scr3-blue-fish').fadeOut(500);
       $('#scr3-purple-fish').fadeOut(500);
        
    });
    
    /// RIVER AQ
    $('#scr3-navigation>.arrow-right').click(function(){
       
        $('#scr3-navigation>.arrow-right').animate({opacity: 1}, 500);
        $('#scr3-navigation>.arrow-left').animate({opacity: 0.4}, 500); 
        
        $('#scr3-navigation>.full-story-left').addClass('full-story-visible');
        $('#scr3-navigation>.full-story-right').removeClass('full-story-visible');

        $('#scr3-left-right-corals').fadeOut(500);
        $('#scr3-left-left-corals').fadeOut(500);
        $('#scr3-right-left-corals').fadeIn(500);
        $('#scr3-right-right-corals').fadeIn(500);
        
        $('#scr3-bubles-right').fadeIn(500);
        $('#scr3-bubles-left').fadeOut(500);
        
       $('#scr3-left-big-orange-fish').fadeOut(500);
       $('#scr3-left-orange-fish-x2').fadeOut(500);
       $('#scr3-left-right-blue-fish-1').fadeOut(500);
       $('#scr3-left-right-blue-fish-2').fadeOut(500);
       $('#scr3-left-right-blue-fish-3').fadeOut(500);
       $('#scr3-left-right-blue-fish-4').fadeOut(500);
       $('#scr3-left-right-blue-fish-5').fadeOut(500);
       
       $('#scr3-blue-fish-small').fadeIn(500);
       $('#scr3-rb-fish-1').fadeIn(500);
       $('#scr3-rb-fish-2').fadeIn(500);
       $('#scr3-rb-fish-3').fadeIn(500);
       $('#scr3-rb-fish-4').fadeIn(500);
       $('#scr3-rb-fish-5').fadeIn(500);
       $('#scr3-rb-fish-6').fadeIn(500);
       $('#scr3-rb-fish-7').fadeIn(500);
       $('#scr3-blue-fish').fadeIn(500);
       $('#scr3-purple-fish').fadeIn(500);
        
    });
    
    

	// SCREEN 4 WORKS SLIDER
	
	/// INIT MARKUP WSC SLIDER
	function WSC(id){
		
		//// PARAMS
		//var WSC_FULL_STORY_DELAY = 50;
		//var WSC_FULL_STORY_FADE  = 200;

		//$.ajaxSetup({cache:false});
		
		var $WSC = $(id);
		
		var $WSC_CONTAINER = $WSC.find('.works-slider-container');
		
		var $WSC_INNER_CONTAINER = $WSC.find('.works-slider-inner-container');
		
		var $WSC_ITEMS = $WSC_INNER_CONTAINER.find('.wsc-items');
		
		var $WSC_EACH_ITEMS = $WSC_ITEMS.find(".wsc-item");

		var $WSC_SPACE = $WSC.find('.wsc-space');
		
		var $WSC_FULL_STORY_CONTAINER = $WSC.find('.wsc-full-story');
		
		var $WSC_FADE_SCREEN = $WSC.find('.wsc-fade-screen');
		
		var $WSC_FSC_CLOSE_BTN = $WSC.find('.wsc-full-story-close');
		
		var $WSC_FSC_POSTS_BTN = $WSC.find('.owsi-tap');
		
		var $WSC_ARROW_LEFT = $WSC.find('.wsc-arrow-left');
		
		var $WSC_ARROW_RIGHT = $WSC.find('.wsc-arrow-right');
		
		var $WSC_FULL_STORY_CONTENT = $WSC.find('.wsc-full-story-content');

		
		//var $WSC_WORKS_LINKS_ARRAY = $WSC.find('.wsc-link-array');
		
	   
	    //// VAR	
		
		var wsc_height = $WSC.height();
		
		var wsc_firts_margin_set = Math.round((wsc_height/2)-340);
		
		var works_count = $WSC_EACH_ITEMS.size();
		
		var slide_group_count = $WSC_ITEMS.size();
		
		var slide_group_width = $WSC_ITEMS.width();
	
		
		//// HOVER WSC ITEM
		function HOVER_WSC_ITEM(){
		    $WSC_ITEMS.find('.wsc-item>.wsc-hover').hover(function(){
                $(this).addClass('flip');
            },function(){
                $(this).removeClass('flip');
            });
        
        }
		
		
		//// TOOGLE ARROWS
		
		function ToogleArrow(arrow, action){
		    
		    
		    if (arrow == 'Left'){
		        
		        if ( action == 'Hide' ){
		            
		            $WSC_ARROW_LEFT.fadeOut(100);
		            
		        } else if ( action == 'Show' ){
		            
		            $WSC_ARROW_LEFT.fadeIn(100);
		            
		        }
		        
		    } else if (arrow == 'Right'){

                if ( action == 'Hide' ){
                    
                    $WSC_ARROW_RIGHT.fadeOut(100);
                    
                } else if ( action == 'Show' ){
                    
                    $WSC_ARROW_RIGHT.fadeIn(100);
                    
                }

		    }
		    
		    
		}


		//// CLOSE HOVER IN FULL STORY
		function HOVER_CLOSE_BTN(){
		    
            $WSC_FSC_CLOSE_BTN.hover(function(){
                
                $(this).find('.wsc-fsc-icon').css('background-position', '-14px 0');
                
                $(this).find('.wsc-fsc-text').css('color', '#00d8ff');
                
            },function(){
                
                $(this).find('.wsc-fsc-icon').css('background-position', '0 0');
                
                $(this).find('.wsc-fsc-text').css('color', '#808080');
                
            });		    
		    
		}
		
		
	    //// CLICK SLIDER ARROW
	    
	    function INIT_MOVE_SLIDERS(){
	    	
	    	var workScrPointer = 1;
	        
	        function MoveByClick(dest){
	            
	            var moveStep = 960;
	            
	            var curPos = parseInt($WSC_INNER_CONTAINER.css('margin-left'));
	            
	            var pos = 0;
	            
	            if (dest == 'onRight'){
	                
	                pos = curPos-moveStep;
	                
	            } else if (dest == 'onLeft'){
                    
                    pos = curPos+moveStep;
                    
                }
                
                $WSC_INNER_CONTAINER.animate({'margin-left': pos+'px'}, 500, 'easeInOutCubic');

	        }

			$WSC.find(".wsc-arrow-right").click(function(){
			    
			    workScrPointer++;
			    
			    MoveByClick('onRight');
			    
			    if ( (workScrPointer+1) > slide_group_count ){
			    	ToogleArrow('Right', 'Hide');
			    }

			    if ( (workScrPointer+1) > 1 ){
			    	ToogleArrow('Left', 'Show');
			    }
			    
			    
    	    });
		    
		    $WSC.find(".wsc-arrow-left").click(function(){
		    	
		    	workScrPointer--;
		        
		        MoveByClick('onLeft');
		        
			    if ( (workScrPointer-1) < 1 ){
			    	ToogleArrow('Left', 'Hide');
			    }

			    if ( (workScrPointer-1) < slide_group_count ){
			    	ToogleArrow('Right', 'Show');
			    }
		        
		    });
		    
	    }
		
		
		//// INIT SLIDER IN FULL STORY
		function INIT_SLIDER_IN_FULL_STORY(){
			
			///// Init slides
			
			var $slidesContainerInContent = $WSC_FULL_STORY_CONTENT.find('.owsis-slider');
	
			var $slideItemInContent = $slidesContainerInContent.find('li');
			
			
			var images_count = $slideItemInContent.size();

			var image_counter = 0;
			
			var active_image_class = 'active-image';
			
			var active_pag_image_class = 'active-pag-img';
			
			
			$slidesContainerInContent.width(images_count*$slideItemInContent.width());
			
			
			///// Init pagination
			
			var $slidesPaginationInContent = $WSC_FULL_STORY_CONTENT.find('.owsis-pagination');
			
			var pag_item_counter = 1;
			
			while (pag_item_counter <= images_count){
				
				$slidesPaginationInContent.html($slidesPaginationInContent.html()+'<li></li>');
				
				pag_item_counter++;
				
			}
			
			///// Click Prev, Next
			
			var $img_item = $slidesContainerInContent.find('li');
			
			var $prev_img = $WSC_FULL_STORY_CONTENT.find('.owsis-prev-img');
			
			var $next_img = $WSC_FULL_STORY_CONTENT.find('.owsis-next-img');

			
			if (images_count > 1){
				
				$prev_img.show();
				
				$next_img.show();
				
				$slidesPaginationInContent.show();
				
			}
			
			///// Set Class on active image
			
			function SetClassActiveImage(index){
			    
			    $slideItemInContent.removeClass(active_image_class);
			    
			    $slideItemInContent.eq(index).addClass(active_image_class);
			    
			    $slidesPaginationInContent.find('li').removeClass(active_pag_image_class);
			    
			    $slidesPaginationInContent.find('li').eq(image_counter).addClass(active_pag_image_class);
		    
			}
			
			SetClassActiveImage(0);
			
			
			///// Move slides
			
			var animated_images = false;
			
			function MoveInnerSlider(dest, pag_id){
			    
			    if (animated_images){
			         
			        return false;
			      
			    } else if (animated_images == false){
			        
			        animated_images = true;
			        
                    var moveStep = $img_item.width();
                    
                    var curPos = parseInt($slidesContainerInContent.css('margin-left'));
                    
                    var pos = 0;
    
                    
                    if ( dest == 'right' ){
                        
                        if ( (image_counter+2) > images_count ){
                            
                            pos = 0;
                            
                            image_counter = 0;
                        
                        } else {
                            
                            pos = curPos-moveStep;
                            
                            image_counter++;
                            
                        }
                        
                    } else if ( dest == 'left' ){
                        
                        
                        if ( (image_counter-1) < 0 ){
                            
                            pos = -((images_count-1)*moveStep);
                            
                            image_counter = images_count-1;
                         
                        } else {
                            
                            pos = curPos+moveStep;
                            
                            image_counter--;
                            
                        };
                        
                        
                        
                    } else if ( dest == 'pag' ){
                        
                        //if ( pag_id > image_counter ){
                            
                            //pos = -(pag_id*moveStep);
                            
                        //} else if ( pag_id < image_counter ){
                        
                            pos = -(pag_id*moveStep);
                        
                        //}
                     
                            
                            
                            image_counter = pag_id;
                        
                    }

                    
                    $slidesContainerInContent.animate({'margin-left': pos+'px'}, 200, function(){
                    
                        animated_images = false;
                        
                    });
                    
                    SetClassActiveImage(image_counter);
			        
			        
			    }

				
			}

			
			$prev_img.click(function(){

				MoveInnerSlider('left');
				
			});
			
			
			$next_img.click(function(){
				
				MoveInnerSlider('right');
				
			});
			
			///// Click on pagination item
			var $pag_item = $slidesPaginationInContent.find('li');

            $pag_item.click(function(){
                
                var cur_pag_item_id = $(this).index();
                
                MoveInnerSlider('pag', cur_pag_item_id);
                
            });
			
			
		}

		
		var WorkCounter = 0;
			
		//// SHOW FULL STORY
		function SHOW_FULL_STORY(){

			$WSC.find('.wsc-item').click(function(){
				
				var dataLink = $(this).attr("data-link");
				WorkCounter = $(this).attr("data-num");
	
				$WSC_FADE_SCREEN.fadeIn(300);

				$WSC_FULL_STORY_CONTENT.load(dataLink).delay(1000).fadeIn(1000);
	
	        	setTimeout( function(){
	        		
					$WSC_FULL_STORY_CONTAINER.addClass('wsc-full-story-show-x');
					
					setTimeout( function(){
						
						$WSC_FULL_STORY_CONTAINER.addClass('wsc-full-story-show-y');
						
						INIT_SLIDER_IN_FULL_STORY();
						
						$WSC_FSC_CLOSE_BTN.fadeIn(1100);
						
						$WSC_FSC_POSTS_BTN.fadeIn(1100);
						
				    }, 300);
					
			    }, 400);
				
		    });   
	    }
	    
	    //// CLOSE WORK FULL STORY
	    
	    function CLOSE_FULL_STORY($OBJ_CLOSE){
	        
		    $OBJ_CLOSE.click(function(){
		        
				$WSC_FSC_CLOSE_BTN.fadeOut(100);

				$WSC_FSC_POSTS_BTN.fadeOut(100);

	        	setTimeout( function(){
	        		
					$WSC_FULL_STORY_CONTAINER.removeClass('wsc-full-story-show-y');
					
					$WSC_FULL_STORY_CONTENT.fadeOut(200);
					
					$WSC_FULL_STORY_CONTENT.html('');
					
					setTimeout( function(){
						
						$WSC_FULL_STORY_CONTAINER.removeClass('wsc-full-story-show-x');

				    }, 300);
					
			    }, 100);
				
				$WSC_FADE_SCREEN.delay(500).fadeOut(300);
				
		    });
		    
	    } 

		
		//// GET WORKS ARRAY
		
		function GET_WORK_ARRAY(){
			
			var WorkCounter = 0;
		    
			WorksLinks = new Array();

			while (WorkCounter <= (works_count-1)){

				WorksLinks[WorkCounter] = $WSC_EACH_ITEMS.eq(WorkCounter).attr('data-link');
				
				WorkCounter++;
				
			}
			
		} 

	
		//// AJAX LOAD WORK IN FULL SLIDE
		
		function CLICK_INNER_ARROWS(arrow){
			
			var $BTN = $(arrow);
			
			var post_link = '';
			
			var easing = 'easeOutBack';
			
			$BTN.click(function(){
				
				if (WorkCounter == (works_count+1)){
			    	WorkSliderCounter = 0;
			    } else if (WorkCounter == -1){
			    	WorkCounter = works_count;
			    }
			    
				    if (arrow == '.owsi-tap-right'){
				    	if((++WorkCounter > works_count)){
							WorkCounter = 1;
						}
				    	post_link = WorksLinks[WorkCounter-1];
						$WSC_FULL_STORY_CONTENT
							.animate({opacity: 0, 'margin-left': '-960px'}, 350, easing)
							.animate({'margin-left': '480px'}, 1);
						
				    }
				     
				    else if (arrow == '.owsi-tap-left'){
				    	if((--WorkCounter <= 0)){
							WorkCounter = works_count;
						}
				    	post_link = WorksLinks[WorkCounter-1];
						$WSC_FULL_STORY_CONTENT
							.animate({opacity: 0, 'margin-left': '480px'}, 350, easing)
							.animate({'margin-left': '-960px'}, 1);
				    }

			        $WSC_FULL_STORY_CONTENT.load(post_link, function(){
			        	
			        	INIT_SLIDER_IN_FULL_STORY();
			        	
			        }).animate({opacity: 1, 'margin-left': '-480px'}, 350);
				
			});

		}


        //// INIT SLIDER
        function INIT_SLIDER(){
            
            ///// GET ALL WORKS ARRAY
            GET_WORK_ARRAY();

            
            ///// SET CONTAINER CENTER POSITION
        
            var container_margin_top = parseInt( (wsc_height/2)-($WSC_CONTAINER.height()/2) );
            
            $WSC_CONTAINER.css('margin-top', container_margin_top+'px');
            
                    
            ///// SET CONTAINER WIDTH
            
            $WSC_INNER_CONTAINER.width( slide_group_count*slide_group_width );
        
        
            ///// SHOW FIRST ARROW
            
            if (slide_group_count > 1){
                
                ToogleArrow('Right', 'Show');
                
            }

            
            HOVER_CLOSE_BTN();
            
            INIT_MOVE_SLIDERS();
            
            HOVER_WSC_ITEM();

            CLICK_INNER_ARROWS('.owsi-tap-left');
            
            CLICK_INNER_ARROWS('.owsi-tap-right');            
            
            SHOW_FULL_STORY();
            
            CLOSE_FULL_STORY($WSC_FADE_SCREEN);
            
            CLOSE_FULL_STORY($WSC_FSC_CLOSE_BTN);
            
        } INIT_SLIDER();


	} WSC('#wsc-works');

	
	// SCREEN 5 
	var aqua_id=null,
		aqua={a:0,b:0,d:0,h:0,e:0},
		thumb=null,
		equipment=null,
		decor={f:0,w:0,g:0,facture:0,coralls:0},
		contacts={fio:'',tel:'',email:''},
		tabId=0,
		maxTabId=0,
		aquaViewSpriteShift=[0,385,898,1483,2000,2587],
		imgpth='wp-content/themes/homeocean2014/images/slide-5/',
		errorMsgs={
			wrongA:'Неверное значение ширины аквариума',
			wrongB:'Неверное значение длинны аквариума',
			wrongD:'Неверное значение ширины угла',
			wrongH:'Неверное значение высоты аквариума',
			wrongE:'Неверное значение высоты тумбы',
			wrongThumb:'Выберите вариант оформления тумбы',
			wrongEquipment:'Bыберите нужный тип оборудования',
			wrongStep4:'Заполните хотя бы одно поле',
			wrongFio:'Введите Ваши фамилию имя отчество',
			wrongTel:'Неправильный формат телефона',
			wrongEmail:'Неправильный формат email адреса'
		};
	function checkTel(tel){
		return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel);
	}
	function checkEmail(email){
		return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(email);
	}
	function checkStep4(){
		var res=false;
		for(key in decor){
			res = res || decor[key];
		}
		return res;
	}
	function getErrorsStep(stepNo) {
		var errors=[];
		if(stepNo<1 || stepNo>5)stepNo=0;
		if((stepNo==0 || stepNo==1) && aqua.a<=0)errors.push(errorMsgs.wrongA);
		if((stepNo==0 || stepNo==1) && aqua.b<=0)errors.push(errorMsgs.wrongB);
		if((stepNo==0 || stepNo==1) && aqua.d<=0)errors.push(errorMsgs.wrongD);
		if((stepNo==0 || stepNo==1) && aqua.h<=0)errors.push(errorMsgs.wrongH);
		if((stepNo==0 || stepNo==2) && aqua.e<=0)errors.push(errorMsgs.wrongE);
		if((stepNo==0 || stepNo==2) && thumb==0)errors.push(errorMsgs.wrongThumb);
		if((stepNo==0 || stepNo==3) && equipment==0)errors.push(errorMsgs.wrongEquipment);
		if((stepNo==0 || stepNo==4) && !checkStep4())errors.push(errorMsgs.wrongStep4);
		if((stepNo==0 || stepNo==5) && !contacts.fio )errors.push(errorMsgs.wrongFio);
		if((stepNo==0 || stepNo==5) && !checkTel(contacts.tel))errors.push(errorMsgs.wrongTel);
		if((stepNo==0 || stepNo==5) && !checkEmail(contacts.email))errors.push(errorMsgs.wrongEmail);
		return errors;
	}
	function showMsg(msg){
		if(msg instanceof Array){
			msg=msg.join("\n");
		}
		alert(msg);
	}
	function getErrors(stepNo) {
		var errors=getErrorsStep(stepNo);
		if(errors.length>0){
			showMsg(errors);
		}
		return errors.length;
	}
	
	function gotoStep(stepNo){
		tabId=stepNo;
		$('#s5-aqua-view').css({
		    background:"url('"+imgpth+"s5-aqua-"+aqua_id+"-view.png') center -"+aquaViewSpriteShift[stepNo-1]+"px no-repeat",
		    height:(aquaViewSpriteShift[stepNo]-aquaViewSpriteShift[stepNo-1])+'px'
	    });
		$('#s5-calc-form').css({background:"url('"+imgpth+"s5-form-bg-sprite.png') 0px -"+stepNo*392+"px no-repeat, url('"+imgpth+"s5-form-bg-sprite.png') 0px 0px no-repeat"});
		$('.s5-form-step').hide();
		$('#s5-form-step'+stepNo).show();
		$('.s5-calc-tab').removeClass('s5-tab-fullfilled s5-tab-current').each(
			function(){
				var $this=$(this),
					code=$this.attr('data-code');
				if(code<=maxTabId){
					if(!getErrorsStep(code).length && stepNo!=code){
						$this.addClass('s5-tab-fullfilled');
					}
				}
			}
		);
		$('#s5-calc-tab'+stepNo).addClass('s5-tab-current');
	}
	function nextStep(escape) {
		if(tabId<5){
			if(escape || !getErrors(tabId)){
				tabId++;
				maxTabId=Math.max(maxTabId,tabId);
				gotoStep(tabId);
				$('#s5-calc-tab'+tabId)
					.addClass('s5-tab-active')
					.click(
						function(){
							gotoStep($(this).attr('data-code'));
						}
					);
			}
		}else{
			if(!getErrors(5)){
				$.ajax({
					type:'POST',
					url:'s5-mail-sender.php',
					data:({
						a:aqua.a,
						b:aqua.b,
						d:aqua.d,
						h:aqua.h,
						e:aqua.e,
						thumb:thumb,
						equipment:equipment,
						f:decor.f,
						w:decor.w,
						g:decor.g,
						facture:decor.facture,
						coralls:decor.coralls,
						fio:contacts.fio,
						tel:contacts.tel,
						email:contacts.email
		 			}),
					success:function(data){
						showMsg('Заказ принят, спасибо!');
						return false;
					}
				}); 
			}
		}
	}
	function checkStepFilling(){
		if(!getErrorsStep(tabId).length){
			$('#s5-form-step'+tabId+' .s5-gonext').attr(
				{class:'s5-button s5-gonext'}
			).unbind('click').click(nextStep);
		}else{
			$('#s5-form-step'+tabId+' .s5-gonext').attr(
				{class:'s5-button-disabled s5-gonext'}
			).unbind('click');
		}
	}
	function setSpinbox($this,obj,fname){
		$this.append('<div class="s5-spinbox-buttons"><div class="s5-spinbox-button s5-spinbox-up"></div><div class="s5-spinbox-button s5-spinbox-down"></div></div><input value="0"/>');
		var input=$this.find('input');
		input.blur(function(){
						obj[fname]=parseInt(input.val());
						if(isNaN(obj[fname]))obj[fname]=0;
						input.val(obj[fname]);
						checkStepFilling();
						return false;
		});
		$this.find('.s5-spinbox-up').click(function(){
						obj[fname]++;
						input.val(obj[fname]);
						checkStepFilling();
						return false;
		});
		$this.find('.s5-spinbox-down').click(function(){
						if(--obj[fname]<0){
							obj[fname]=0;
						}
						input.val(obj[fname]);
						checkStepFilling();
						return false;
		});
	}
	$.fn.setSpinbox = function(obj,fname) {
		var $this=$(this),
			cls=$this.attr('class');
		setSpinbox($this.attr({class:((cls)?(cls+' '):'')+'s5-spinbox'}),obj,fname);
		return this;
	}
	function doAnimation(object,transformation,duration) {
		$(object).animate(
			{transform:transformation},
			duration,
			'swing',
			function(){
				$(this).css(
					{display:'none'}
				);
			}
		);
	}
	var slide_5_carousel = $("#s5-carousel").waterwheelCarousel({
			startingItem: 0,
			flankingItems: 3,
			separation: 250, 
			horizonOffset : -20,
			horizonOffsetMultiplier: 1.2,
			speed: 600,
			edgeFadeEnabled:true,
			movedToCenter: function(newCenterItem) {
				if(aqua_id===null){
					var	$window = $(window),
						windowW = $window.width(),
						windowH = $window.height();
					doAnimation('#s5-sp-pensil','translate(-'+($('#s5-sp-pensil').offset().left+$('#s5-sp-pensil').width())+'px,200px) rotate(-240deg)',2300);
					doAnimation('#s5-sp-robot','translate('+(windowW-$('#s5-sp-robot').offset().left)+'px,-500px) rotate(190deg)',2300);
					doAnimation('#s5-sp-lastic','translate(300px,'+(windowH-$('#s5-sp-lastic').offset().top)+'px) rotate(290deg)',2300);
					$('#s5-sp-descr').effect('puff',{direction:'left'},1500,function(){$(this).hide();});
					$('#s5-sp-label').effect('puff',{direction:'left'},1000,function(){$(this).hide();});
					$('#s5-sp-logo').fadeOut(3000);
					$('#s5-start-page').delay(3000).fadeOut(0);
					$('#s5-calc').delay(3000).fadeIn(500);
				}
                aqua_id = newCenterItem.attr('data-aqua-num');
				gotoStep(1);
			}
	});
				/*if(aqua_id===null){
					var	$window = $(window),
						windowW = $window.width(),
						windowH = $window.height();
					doAnimation('#s5-sp-pensil','translate(-'+($('#s5-sp-pensil').offset().left+$('#s5-sp-pensil').width())+'px,200px) rotate(-240deg)',2300);
					doAnimation('#s5-sp-robot','translate('+(windowW-$('#s5-sp-robot').offset().left)+'px,-500px) rotate(190deg)',2300);
					doAnimation('#s5-sp-lastic','translate(300px,'+(windowH-$('#s5-sp-lastic').offset().top)+'px) rotate(290deg)',2300);
					$('#s5-sp-descr').effect('puff',{direction:'left'},1500,function(){$(this).hide();});
					$('#s5-sp-label').effect('puff',{direction:'left'},1000,function(){$(this).hide();});
					$('#s5-sp-logo').fadeOut(3000);
					$('#s5-start-page').delay(3000).fadeOut(0);
					$('#s5-calc').delay(3000).fadeIn(500);
				}
                aqua_id = 1;
				gotoStep(1);*/
/*STEP 1*/
	nextStep(1);
	$('#s5-spinbox-a').setSpinbox(aqua,'a');
	$('#s5-spinbox-b').setSpinbox(aqua,'b');
	$('#s5-spinbox-d').setSpinbox(aqua,'d');
	$('#s5-spinbox-h').setSpinbox(aqua,'h');
/*STEP 2*/
		$('#s5-spinbox-e').setSpinbox(aqua,'e');
		function s5_step2_check() {
            $('#s5-thumb-panell').attr({class:'s5-thumb-panell'+((thumb>1)?'-checked':'')});
            $('#s5-thumb-panell-btn').attr({class:'s5-bbl s5-thumb-panell-btn'+((thumb>1)?'-checked':'')});
            $('#s5-thumb-carcas').attr({class:'s5-thumb-carcas'+((thumb==1)?'-checked':'')});
            $('#s5-thumb-carcas-checkbox').attr({class:'s5-bbl s5-checkbox'+((thumb==1)?'-checked':'') });
			checkStepFilling();
		}
        $('#s5-thumb-panell,#s5-thumb-panell-btn').click(function(){
			$('#s5-step2-select').hide();
			$('#s5-step2-gallery').show();
		});
		$('#s5-step2-gallery .s5-gallery-element').click(function(){
		    var $this=$(this);
		    thumb = parseInt($this.attr('data-panel-texture'));
            $('#s5-step2-gallery').hide();
            $('#s5-step2-select').show();
            s5_step2_check();
		});
        $('#s5-thumb-carcas,#s5-thumb-carcas-checkbox').click(function(){
            if(thumb!=1){
				thumb=1;
				s5_step2_check();
			}
        });
		$('#s5-form-step2 .s5-escape').click(
			function(){
				aqua.e=0;
				thumb=0;
				$('#s5-spinbox-e input').val(0);
				s5_step2_check();
				checkStepFilling();
				nextStep(1);
			}
		);
/*STEP 3*/
        function setEquipmentChecked(){
            var suffix = '';
            suffix=((equipment==1)?'-checked':'');
            $('#s5-equipment-sea').attr({class:'s5-equipment-sea'+suffix});
            $('#s5-equipment-sea-checkbox').attr({class:'s5-checkbox'+suffix});
            suffix=((equipment==2)?'-checked':'');
            $('#s5-equipment-river').attr({class:'s5-equipment-river'+suffix});
            $('#s5-equipment-river-checkbox').attr({class:'s5-checkbox'+suffix});
			checkStepFilling();
        }
        $('#s5-equipment-sea,#s5-equipment-sea-checkbox').click(function(){
            equipment=1;
            setEquipmentChecked();
        });
        $('#s5-equipment-river,#s5-equipment-river-checkbox').click(function(){
            equipment=2;
            setEquipmentChecked();
        });
		$('#s5-form-step3 .s5-escape').click(
			function(){
				equipment=0;
				setEquipmentChecked();
				checkStepFilling();
				nextStep(1);
			}
		);
/*STEP 4*/
        $('#s5-panell-choise > div').click(function(){
			var $this=$(this),
				letter=$this.attr('data-letter');
			if(decor[letter]){
                decor[letter]=0;
                $this.attr({class:'s5-selector-'+letter});
            }else{
                decor[letter]=1;
                $this.attr({class:'s5-selector-'+letter+'-checked'});
            }
            function getPBG(flag,shift) {
                if(flag){
                    return "url('"+imgpth+"s5-aqua-panels-sprite.png') 0px -"+shift+"px no-repeat,";
                }
                return '';
            }
            $('#s5-aqua-panels').css({background:"url('"+imgpth+"s5-aqua-panels-sprite.png') 0px -480px no-repeat,"+getPBG(decor.f,120)+getPBG(decor.g,360)+getPBG(decor.w,240)+"url('"+imgpth+"s5-aqua-panels-sprite.png') 0px 0px no-repeat"});
			checkStepFilling();
		});
        $('#s5-panell-facture').click(function(){
            $('#s5-step4-panells').hide();
            $('#s5-step4-facture').show();
        });
        $('#s5-step4-facture .s5-gallery-element').click(function(){
            decor.facture=parseInt($(this).attr('data-facture'));
            $('#s5-step4-facture').hide();
            $('#s5-step4-panells').show();
			$('#s5-panell-facture-icon').css({background:"url('"+$(this).find('img').attr('src')+"') 0px 0px no-repeat"});
			checkStepFilling();
        });
		$('#s5-coralls-spinbox').setSpinbox(decor,'coralls');
		$('#s5-form-step4 .s5-escape').click(
			function(){
				for(key in decor)decor[key]=0;
				$('#s5-panell-choise > div').each(
					function(){
						var $this=$(this);
						$this.attr(
							{
								class:'s5-selector-'+$this.attr('data-letter')
							}
						);
					}
				);
				$('#s5-aqua-panels').css({background:"url('"+imgpth+"s5-aqua-panels-sprite.png') 0px -480px no-repeat,url('"+imgpth+"s5-aqua-panels-sprite.png') 0px 0px no-repeat"});
				$('#s5-panell-facture-icon').css({background:"url('') 0px 0px no-repeat"});
				$('#s5-coralls-spinbox input').val(0);
				checkStepFilling();
				nextStep(1);
			}
		);
/*STEP 5*/
		$('#inp-fio').blur(function(){
			contacts.fio=$('#inp-fio').val();
			checkStepFilling();
		});
		$('#inp-tel').blur(function(){
			contacts.tel=$('#inp-tel').val();
			checkStepFilling();
		});
		$('#inp-email').blur(function(){
			contacts.email=$('#inp-email').val();
			checkStepFilling();
		});

	// SCREEN 6


	
    /// HOPS
    function INIT_HO_SLIDER(id){
        
        
        //// BASE SELECTORS
        
        var $SLIDER = $(id);
        
        var $SLIDER_CONTAINER = $SLIDER.find('.hops-container');
        
        var $SLIDE = $SLIDER.find('.hops-item');
        
        var $SLIDER_PAGINATION = $SLIDER.find('.hops-pagination');
        
        var $SLIDER_TAPS = $SLIDER.find('.hops-tap');
        
        var $SLIDE_READ_MORE = $SLIDER_CONTAINER.find('.hops-readmore');
        
        var $SLIDER_FADE_SCREEN = $SLIDER.find('.hops-fade-screen');
        
        var $SLIDER_FULL_STORY = $SLIDER.find('.hops-full-story');
        
        var $SLIDER_FULL_STORY_CONTENT = $SLIDER_FULL_STORY.find('.hops-fs-content');
       
        var $SLIDER_FULL_STORY_CLOSE = $SLIDER.find('.hops-fs-footer-close-btn');


        //// BASE VARIABLES

        var SLIDER_SCREEN_WIDTH = $SLIDER.width();
        
        var SLIDER_SCREEN_HEIGHT = $SLIDER.height();
        
        var SLIDE_WIDTH = parseInt($SLIDER_CONTAINER.find('.hops-item').width())+
                          parseInt($SLIDER_CONTAINER.find('.hops-item').css('margin-left'))+
                          parseInt($SLIDER_CONTAINER.find('.hops-item').css('margin-right'));
        
        var SLIDE_START_OPACITY = $SLIDE.css('opacity');
        
        var SLIDES_COUNT = $SLIDE.size();

        var SLIDER_CONTAINER_WIDTH = SLIDE_WIDTH*SLIDES_COUNT;
        
        var ACTIVE_SLIDE_CLASS = 'hops-item-active';
        
        var ACTIVE_PAGINATION_ITEM_CLASS = 'hops-p-hover-active';
        
        var ACTIVE_PAGINATION_ITEM_INDEX = 0;
        
        var PAGINATION_ITEM_HTML = $SLIDER_PAGINATION.html();
        
        var PAGINATION_CURRENT_ITEM_INDEX = 0;
        
        var PAGINATION_NEXT_ITEM_INDEX = 0;
        
        var SLIDER_CONTAINER_POS = 0


        //// TAPS ITEMS HOVER
        $SLIDER_TAPS.hover(function(){
            $(this).find('.hops-tap-hover').stop().animate({opacity: 1}, 100);
        },function(){
            $(this).find('.hops-tap-hover').stop().animate({opacity: 0}, 100);
            $(this).find('.hops-tap-press').stop().animate({opacity: 0}, 100);
        }); 
        

        //// HIDE PAGINATION ITEMS
        function HideOthersPaginationItems(){
            $SLIDER_PAGINATION.find('.'+ACTIVE_PAGINATION_ITEM_CLASS).removeClass(ACTIVE_PAGINATION_ITEM_CLASS).fadeOut(200).find('.hops-p-pressed').fadeOut(200);
        }
        
        
        //// SHOW PAGINATION ITEM
        function ShowPaginationItem(pagination_index){
            $SLIDER_PAGINATION.find('.hops-p-hover').eq(pagination_index).addClass(ACTIVE_PAGINATION_ITEM_CLASS).fadeIn(100).find('.hops-p-pressed').fadeOut(200);
        }
       
       
        //// HIDE OTHERS SLIDES
        function HideOthersSlides(){
            $SLIDE.stop().animate({opacity: SLIDE_START_OPACITY}, 200).removeClass(ACTIVE_SLIDE_CLASS);
        }
  
  
        //// HIDE RIGHT TAP
        function HideRightTap(){
            $SLIDER.find('.hops-tap-right').stop().fadeOut(300);
        }
        
        
        //// SHOW RIGHT TAP
        function ShowRightTap(){
            $SLIDER.find('.hops-tap-right').stop().fadeIn(200);
        }
        
        
        //// HIDE LEFT TAP
        function HideLeftTap(){
            $SLIDER.find('.hops-tap-left').stop().fadeOut(300);
        }
        
        
        //// SHOW LEFT TAP
        function ShowLeftTap(){
            $SLIDER.find('.hops-tap-left').stop().fadeIn(200);
        }
  
  
        //// SHOW SLIDE
        function ShowSlideItem(slide_index){
            $SLIDE.eq(slide_index).stop().animate({opacity: 1}, 400).addClass(ACTIVE_SLIDE_CLASS);
        }
        
        
        //// MOVE SLIDER CONTAINER
        function MoveSliderContainer(position){
            $SLIDER_CONTAINER.stop().animate({'margin-left': position+'px'}, 700, 'easeOutBack');
        }
        
        
        //// SHOW FADE SCREEN
        function ShowFadeScreen(){
            //$SLIDER_CONTAINER.stop().animate({'margin-left': position+'px'}, 700, 'easeOutBack');
        }
        
        
        //// SHOW FULL STORY
        function ShowFullStory(post_link){
            $SLIDER_FULL_STORY_CONTENT.load(post_link);
            $SLIDER_FADE_SCREEN.fadeIn(300);
            $SLIDER_FULL_STORY.delay(150).fadeIn(10).animate({'margin-top': '0px', 'opacity': '1'}, 400, 'easeOutQuint');
        }
        
        
        //// HIDE FULL STORY
        function HideFullStory(){
            $SLIDER_FULL_STORY.animate({'margin-top': -fs_new_height+'px', 'opacity': '0'}, 300).delay(300).fadeOut(10);
            $SLIDER_FADE_SCREEN.delay(160).fadeOut(300);
            $SLIDER_FULL_STORY_CONTENT.delay(300).html('');
        }
        
        
        //// SET SLIDER CONTAINER WIDTH
        $SLIDER_CONTAINER.css('width', SLIDER_CONTAINER_WIDTH+'px');
        
        
        //// SET FULL STORY DIMENSIONS
        var fs_new_height = (SLIDER_SCREEN_HEIGHT-80);
        $SLIDER_FULL_STORY.css({'height': fs_new_height+'px', 'margin-top': -fs_new_height+'px'});
        $SLIDER_FULL_STORY_CONTENT.css('height', (fs_new_height-107)+'px');
        
        
        //// SET SCROLL START POSITION
        var start_scroll_pos = Math.round( (SLIDER_SCREEN_WIDTH/2) - (SLIDE_WIDTH/2) );
        MoveSliderContainer(start_scroll_pos);
        SLIDER_CONTAINER_POS = start_scroll_pos;
        ShowSlideItem(0);
        HideLeftTap();
        
        
        //// INIT PAGINATION
        var pagination_html = '';
        var pagination_li_couner = 1;
        while ( (pagination_li_couner >= 1) && (pagination_li_couner <= SLIDES_COUNT) ){
            pagination_html+= PAGINATION_ITEM_HTML;
            $SLIDER_PAGINATION.html(pagination_html);
            pagination_li_couner++;
        }
        ShowPaginationItem(0);
    
    
        //// PAGINATION ITEMS HOVER
        $SLIDER_PAGINATION.find('li').hover(function(){
            if ( !$(this).find('.hops-p-hover').hasClass(ACTIVE_PAGINATION_ITEM_CLASS) ){
                $(this).find('.hops-p-hover').fadeIn(100);
            }
        },function(){
            if ( !$(this).find('.hops-p-hover').hasClass(ACTIVE_PAGINATION_ITEM_CLASS) ){
                $(this).find('.hops-p-hover').fadeOut(200);
                $(this).find('.hops-p-pressed').fadeOut(200);
            }
        });
    
    
        //// PAGINATION ITEMS MOUSE DOWN
        $SLIDER_PAGINATION.find('.hops-p-hover').mousedown(function(){
            
            if ( !$(this).hasClass(ACTIVE_PAGINATION_ITEM_CLASS) ){
                $(this).find('.hops-p-pressed').fadeIn(20);
            }
            
        }).mouseup(function(){
            
            if ( !$(this).hasClass("hops-p-hover-active") ){
                
                PAGINATION_CURRENT_ITEM_INDEX = $SLIDER_PAGINATION.find('.'+ACTIVE_PAGINATION_ITEM_CLASS).parent().index();

                HideOthersPaginationItems();

                PAGINATION_NEXT_ITEM_INDEX = $(this).parent().index();
                
                ShowPaginationItem(PAGINATION_NEXT_ITEM_INDEX);
                        
                if ( PAGINATION_NEXT_ITEM_INDEX > PAGINATION_CURRENT_ITEM_INDEX ){
                    
                    SLIDER_CONTAINER_POS-= SLIDE_WIDTH*(PAGINATION_NEXT_ITEM_INDEX-PAGINATION_CURRENT_ITEM_INDEX);
                    
                } else if ( PAGINATION_NEXT_ITEM_INDEX < PAGINATION_CURRENT_ITEM_INDEX ){
                    
                    SLIDER_CONTAINER_POS+= SLIDE_WIDTH*(PAGINATION_CURRENT_ITEM_INDEX-PAGINATION_NEXT_ITEM_INDEX);
     
                }
                
                MoveSliderContainer(SLIDER_CONTAINER_POS);
                
                HideOthersSlides();
                
                ShowSlideItem(PAGINATION_NEXT_ITEM_INDEX);
                
                
                if ( PAGINATION_NEXT_ITEM_INDEX >= 0 ){
                    
                    ShowLeftTap();
                    
                }
                
                
                if ( (PAGINATION_NEXT_ITEM_INDEX+1) > (SLIDES_COUNT-1) ){
                    
                    HideRightTap();
                   
                }
                
                
                if ( PAGINATION_NEXT_ITEM_INDEX < (SLIDES_COUNT-1) ){

                    ShowRightTap();
                    
                }
                
                
                if ( (PAGINATION_NEXT_ITEM_INDEX-1) < 0 ){
                    
                    HideLeftTap();
                    
                }


            }

        }); 


        //// TAPS PRESS
        $SLIDER_TAPS.mousedown(function(){
            
            $(this).find('.hops-tap-press').stop().animate({opacity: 1}, 20);
            
        }).mouseup(function(){
            
            $(this).find('.hops-tap-press').stop().animate({opacity: 0}, 100);
            
                if (   ( $(this).hasClass('hops-tap-right') ) && ( (PAGINATION_NEXT_ITEM_INDEX+1) <= (SLIDES_COUNT-1) )   ){
                    
                    SLIDER_CONTAINER_POS-= SLIDE_WIDTH;
                    
                    PAGINATION_NEXT_ITEM_INDEX++;
                    
                    HideOthersSlides();
                    
                    MoveSliderContainer(SLIDER_CONTAINER_POS);
                    
                    ShowSlideItem(PAGINATION_NEXT_ITEM_INDEX);
        
                    HideOthersPaginationItems();
                    
                    ShowPaginationItem(PAGINATION_NEXT_ITEM_INDEX);
                    
                } else if (   ( $(this).hasClass('hops-tap-left') ) && ( (PAGINATION_NEXT_ITEM_INDEX-1) >= 0 )   ){
                    
                    SLIDER_CONTAINER_POS+= SLIDE_WIDTH;
                    
                    PAGINATION_NEXT_ITEM_INDEX--;

                    HideOthersSlides();
                    
                    MoveSliderContainer(SLIDER_CONTAINER_POS);
                    
                    ShowSlideItem(PAGINATION_NEXT_ITEM_INDEX);
        
                    HideOthersPaginationItems();
                    
                    ShowPaginationItem(PAGINATION_NEXT_ITEM_INDEX);
                    
                }
                
                
                if ( PAGINATION_NEXT_ITEM_INDEX >= 0 ){
                    
                    ShowLeftTap();
                    
                }
                
                
                if ( (PAGINATION_NEXT_ITEM_INDEX+1) > (SLIDES_COUNT-1) ){
                    
                    HideRightTap();
                   
                }
                
                
                if ( PAGINATION_NEXT_ITEM_INDEX < (SLIDES_COUNT-1) ){

                    ShowRightTap();
                    
                }
                
                
                if ( (PAGINATION_NEXT_ITEM_INDEX-1) < 0 ){
                    
                    HideLeftTap();
                    
                }

            
        });
        
        
        //// READ MORE CLICK
        $SLIDE_READ_MORE.click(function(){
            var full_story_link = $(this).attr('post-link');
            ShowFullStory(full_story_link);
        });

        
        //// CLOSE FULL STORY
        $SLIDER_FULL_STORY_CLOSE.click(function(){
            HideFullStory();
        });
        
        
        //// FADE SCREEN CLICK - CLOSE FULL STORY
        $SLIDER_FADE_SCREEN.click(function(){
            HideFullStory();
        });

        
    } INIT_HO_SLIDER('#hops-posts-and-ideas');
    
    //HideRightTap();
    //HideLeftTap();
	
	// SCREEN 7
	
	// VIDEO COVER

	var min_w = 400;
	var vid_w_orig;
	var vid_h_orig;
	
	jQuery(function() { // runs after DOM has loaded
	    vid_w_orig = parseInt(jQuery('video').attr('width'));
	    vid_h_orig = parseInt(jQuery('video').attr('height'));
	    jQuery(window).resize(function () { resizeToCover(); });
	    jQuery(window).trigger('resize');
	});
	
	function resizeToCover() {
	
	    // set the video viewport to the window size
	    jQuery('.video-fullscreen').width(jQuery(window).width());
	    jQuery('.video-fullscreen').height(jQuery(window).height());
	
	    // use largest scale factor of horizontal/vertical
	    var scale_h = jQuery(window).width() / vid_w_orig;
	    var scale_v = jQuery(window).height() / vid_h_orig;
	    var scale = scale_h > scale_v ? scale_h : scale_v;
	
	    // don't allow scaled width < minimum video width
	    if (scale * vid_w_orig < min_w){scale = min_w / vid_w_orig;}
	
	    // now scale the video
	    jQuery('video').width(scale * vid_w_orig);
	    jQuery('video').height(scale * vid_h_orig);
	    // and center it by scrolling the video viewport
	    jQuery('.video-fullscreen').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
	    jQuery('.video-fullscreen').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
	
	};
	
});