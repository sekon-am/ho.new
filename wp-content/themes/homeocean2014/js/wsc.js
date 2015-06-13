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
                    console.log(image_counter+"\t"+pos);
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


	}