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

        
    }