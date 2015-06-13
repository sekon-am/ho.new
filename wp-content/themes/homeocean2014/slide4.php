<!-- SLIDE 4 -->
<!-- SLIDE 4 -->
<div id="slide-4" class="slide">
	<div class="slide-space" id="sps-4"></div>
	<img id="fish_yellow3" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/fish_yellow3.png"/>
	<img id="fish_yellow2" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/fish_yellow2.png"/>
	<img id="bubles_left_back" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/bubles_left_back.png"/>
	<img id="fish_yellow1" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/fish_yellow1.png"/>
	<img id="bubles_left_front" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/bubles_left_front.png"/>
	<img id="fish_blue2" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/fish_blue2.png"/>		
	<img id="bubles_right_back" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/bubles_right_back.png"/>
	<img id="bubles_right_front" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/bubles_right_front.png"/>
	<img id="fish_blue1" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-4/fish_blue1.png"/>
	
	<div class="wsc" id="wsc-works">
		<div class="works-slider-container">

    	<p id="st1_title">Наши работы</p>
    	<div id="st1_hline"></div>
    	<p id="st1_text1"><i>Реализованные проекты аквариумов</i></p>
			
			<div class="works-slider-inner-container">

                <?php
                    $WorksQuery = new WP_Query(array(
                        'cat' => 2,
                        'post_status' => 'publish',
                        'orderby' => 'date',
                        'order' => 'DESC',
						'posts_per_page' => 15,
                    ));
                    
                    $WorkCounter = 1;
                    
                    if ($WorksQuery->have_posts()){ while ($WorksQuery->have_posts()){ $WorksQuery->the_post();
                ?>
                
                    <?php if ($WorkCounter == 1){ ?>
                        <ul class="wsc-items">
                    <?php } ?>
                        <?php
						$images=get_field('gallery-our-works');
						if(count($images)){
							$imageUrl = $images[0]['url'];
						}else{
							$imageUrl = 'images/slide-4/nikolino.jpg';
						}
						?>
                            <li class="wsc-item" data-link="<?php the_permalink(); ?>" data-num="<?php echo $WorkCounter;?>">
                                <div class="wsc-hover wsc-item-zoom">
                                    <div class="wsciz-front" style="background: url('<?php echo $imageUrl;?>') center center no-repeat;background-size:cover;"><div class="wsciz-front-uborder"></div></div>
                                    <div class="wsciz-back">
                                        <div class="wsciz-back-content">
                                            <div class="wsciz-prj-name"><p><?php the_title(); ?></p></div>
                                            <p class="wsciz-prj-loc"><?php the_field('location-our-works'); ?></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                    
                    <?php
                        if ($WorkCounter == 15){ 
                    ?>
                        </ul>
                    <?php 
                        } 
                        $WorkCounter++;
                        if ($WorkCounter > 15){
                            $WorkCounter = 1; 
                        } 
                    ?>
                    
                <?php 
                        } 
                    }
                ?>
			
			</div>
			
		</div>
		
        <div class="wsc-shadow-left"></div>
        <div class="wsc-shadow-right"></div>
        <div class="wsc-arrow-left wsc-arrow"></div>
        <div class="wsc-arrow-right wsc-arrow"></div>
        <div class="wsc-fade-screen"></div>
		
		<div class="wsc-full-story">
			<ul class="wsc-full-story-close"><li class="wsc-fsc-icon"></li><li class="wsc-fsc-text">Закрыть</li></ul>
			<div class="wsc-full-story-content"></div>
			<a class="owsi-tap-left owsi-tap"></a>
			<a class="owsi-tap-right owsi-tap"></a>
		</div>
	
		
	</div>
</div>