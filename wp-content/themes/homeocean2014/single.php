<?php 
    // OUR WORKS
    if ( in_category(2) || in_category(3) || in_category(4) || in_category(5) || in_category(6) ){
        if ( have_posts() ) :  while ( have_posts() ) : the_post(); 
?>
	<div class="outer-work-slide-item">
		
		<div class="ows-text">
			<?php if ( (current_user_can('editor')) || (current_user_can('administrator')) ) : ?>
				<a href="<?php echo get_edit_post_link(); ?>" target="_blank" class="edit-icon"></a>
			<?php endif; ?>
			<div class="ows-t-hline"></div>	
			<h1 class="ows-title"><?php the_title(); ?></h1>
			<div class="ows-loc"><div class="ows-loc-inner"><div class="owsl-text"><?php the_field('location-our-works'); ?></div><div class="owsl-hline"></div></div></div>
			<div class="ows-content"><div class="ows-content-cell"><?php the_content(); ?></div></div>
		</div>
		
		<?php $images = get_field('gallery-our-works'); ?>
		<?php if( $images ): ?>		
			<div class="ows-inner-slider">
				<div class="owsis-slider-container">
					<ul class="owsis-slider">
						<?php foreach( $images as $image ):?>
							<li style="background-image: url(<?php echo $image['url']; ?>);"></li>
						<?php endforeach; ?>
					</ul>
					<div class="owsis-prev-img owsis-img-tap"><div></div></div>
					<div class="owsis-next-img owsis-img-tap"><div></div></div>
					<ul class="owsis-pagination"></ul>
				</div>
			</div>
		<?php endif; ?>

	</div>
<?php
        endwhile; endif;
    
    // POST AND IDEAS 
    } else if (in_category(7)){
        if ( have_posts() ) :  while ( have_posts() ) : the_post();
        $hops_fs_fg_img = get_field('pai-fg-img');
?>   
        <ul class="hops-fs-content-header">
            <li class="hops-fs-cat">
                <div class="hops-fs-cat-name"><p>Статьи и идеи</p></div>
                <div class="hops-fs-cat-pos-id"><p><?php the_id(); ?></p></div>
            </li>
            <li class="hops-fs-title-line"></li>
            <li class="hops-fs-title"><p><?php the_title(); ?></p></li>
            <li class="hops-fs-title-line"></li>
            <li class="hops-fs-title-img"<?php if (!$hops_fs_fg_img==''){ echo " style='background-image: url(".$hops_fs_fg_img.");'"; } ?>></li>
            <li class="hops-fs-title-description"><?php the_field('pai-description')?></li>
        </ul>
        <div class="hops-fs-content-inner"><?php the_content(); ?></div>
<?php     
        endwhile; endif;
    } 
?>	



