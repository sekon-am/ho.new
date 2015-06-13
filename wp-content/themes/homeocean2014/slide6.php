<!-- SLIDE 6 -->
<div id="slide-6" class="slide">
    <div class="slide-space" id="sps-6"></div>
    <img id="ho_logo_scr6" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-6/ho_logo_scr6.png"/>
    
    <ul id="post-and-ideas-title">
        <li id="pai-title">Статьи и идеи</li>
        <li id="pai-description">Множество оригинальных концепций и готовых<br>решений для вашего будующего аквариума</li>
    </ul>

    
    <div class="hops" id="hops-posts-and-ideas">
        <ul class="hops-container">
            <?php
                $hops_item_class_active = 'hops-item-active';
                $hops_item_class_bottom = 'hops-item-bottom';
                $hops_item_class = 'hops-item';
                $hops_item_counter = 1;
                query_posts("cat=7&post_status=publish&orderby=date&order=DESC"); if ( have_posts() ) while ( have_posts() ) : the_post();
                $hops_fg_img = get_field('pai-fg-img');
                $hops_ug_img = get_field('pai-ug-img');
                if ($hops_item_counter == 1){
                    $hops_item_class = $hops_item_class.' '.$hops_item_class_active;
                }
                if ($hops_item_counter%2 == 0){
                    $hops_item_class = $hops_item_class.' '.$hops_item_class_bottom;
                }
            ?>
                <li class="<?php echo $hops_item_class; ?>">
                    <div class="hops-post-image-under-text"<?php if (!$hops_ug_img==''){ echo " style='background-image: url(".$hops_ug_img.");'"; } ?>></div>
                    <div class="hops-content">
                       <div class="hops-post-vline"></div>
                        <div class="hops-post-text-container">
                            <h1><?php the_title(); ?></h1>
                            <h2><?php the_field('pai-description'); ?></h2>
                            <p><?php the_field('pai-short-story'); ?></p>
                        </div>
                    </div>
                    <div class="hops-post-image-on-text"<?php if (!$hops_fg_img==''){ echo " style='background-image: url(".$hops_fg_img.");'"; } ?>></div>
                    <div class="hops-readmore" post-link="<?php the_permalink(); ?>"></div>
                    
                </li>
            <?php 
                $hops_item_counter++;
                $hops_item_class = 'hops-item';
                endwhile; 
            ?>
        </ul>
        
        <div class="hops-tap hops-tap-left"><div class="hops-tap-hover"><div class="hops-tap-press"></div></div></div>
        <div class="hops-tap hops-tap-right"><div class="hops-tap-hover"><div class="hops-tap-press"></div></div></div>
        
        <ul class="hops-pagination">
            <li><div class="hops-p-hover"><div class="hops-p-pressed"></div></div></li>
        </ul>
        
        <div class="hops-fade-screen"></div>

        <div class="hops-full-story">
            <div class="hops-fs-content"></div>
            <div class="hops-fs-footer"><div class="hops-fs-footer-close-btn"><p>Закрыть</p></div></div>
        </div>
        
    </div>
</div>