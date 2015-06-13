<!-- SLIDE 3 -->
<div id="slide-3" class="slide">

    <!-- LEFT -->
    <img id="scr3-left-big-orange-fish" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-big-orange-fish.png"/>
    
    <!-- RIGHT -->
    <img id="scr3-blue-fish-small" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/blue-fish-small.png"/>

    <!-- LEFT CORALS-->
    <img id="scr3-bubles-left" class="objleft" src="<?php bloginfo('template_url'); ?>/images/slide-1/bubles.gif"/>
    <img id="scr3-left-left-corals" class="objleft" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-left-corals.png"/>
    <img id="scr3-left-right-corals" class="objright" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-right-corals.png"/>

    <!-- RIGHT CORALS-->
    <img id="scr3-bubles-right" class="objleft" src="<?php bloginfo('template_url'); ?>/images/slide-1/bubles.gif"/>
    <img id="scr3-right-right-corals" class="objright" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/right-right-corals.png"/>
    <img id="scr3-right-left-corals" class="objleft" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/right-left-corals.png"/>

    <!-- LEFT -->
    <img id="scr3-left-orange-fish-x2" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-orange-fish-x2.png"/>
    <img id="scr3-left-right-blue-fish-1" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-right-blue-fish.png"/>
    <img id="scr3-left-right-blue-fish-2" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-right-blue-fish.png"/>
    <img id="scr3-left-right-blue-fish-3" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-right-blue-fish.png"/>
    <img id="scr3-left-right-blue-fish-4" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-right-blue-fish.png"/>
    <img id="scr3-left-right-blue-fish-5" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/left-right-blue-fish.png"/>
    <img id="scr3-aq-man" class="objleft" src="<?php bloginfo('template_url'); ?>/images/slide-3/left/aq-man.png"/>
        
        
    <!-- RIGHT -->
    <img id="scr3-rb-fish-1" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/rb-fish.png"/>
    <img id="scr3-rb-fish-2" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/rb-fish.png"/>
    <img id="scr3-rb-fish-3" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/rb-fish.png"/>
    <img id="scr3-rb-fish-4" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/rb-fish.png"/>
    <img id="scr3-rb-fish-5" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/rb-fish.png"/>
    <img id="scr3-rb-fish-6" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/rb-fish.png"/>
    <img id="scr3-rb-fish-7" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/rb-fish.png"/>
    <img id="scr3-blue-fish" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/blue-fish.png"/>
    <img id="scr3-purple-fish" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-3/right/purple-fish.png"/>


    <div id="scr3-navigation">
        
        <h1>Дизайн<br>аквариумов</h1>

        <div class="arrow arrow-left"><h2>Морской<br>аквариум</h2></div>
        
        <div class="arrow arrow-right"><h2>Пресноводный<br>аквариум</h2></div>

        <div class="full-story full-story-left">
            <?php query_posts("page_id=320"); if (have_posts()) while (have_posts()) : the_post(); the_content(); endwhile; ?>
        </div>
        
        <div class="full-story full-story-right">
            <?php query_posts("page_id=319"); if (have_posts()) while (have_posts()) : the_post(); the_content(); endwhile; ?>
        </div>

    </div>
    

    
	<div class="slide-space" id="sps-3"></div>		
</div>