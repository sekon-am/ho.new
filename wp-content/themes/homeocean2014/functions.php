<?php

	//DELETE META TAGS FROM WP_HEAD()
	remove_action( 'wp_head', 'feed_links_extra', 3 ); 
	remove_action( 'wp_head', 'feed_links', 2 );
	remove_action( 'wp_head', 'rsd_link' );
	remove_action( 'wp_head', 'wlwmanifest_link' );
	remove_action( 'wp_head', 'index_rel_link' );
	remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); 
	remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
	remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 );
	remove_action( 'wp_head', 'wp_generator' );
	remove_action( 'wp_head', array($sitepress, 'meta_generator_tag' ) );
	remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
	remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );
	remove_filter( 'the_content', 'wpautop' );
	remove_filter( 'the_excerpt', 'wpautop' );
	remove_filter( 'comment_text', 'wpautop' );
	remove_filter( 'the_content', 'wptexturize' );
	remove_filter( 'term_description','wpautop' ); //delete autoP from category description
	
	add_action('wp_enqueue_scripts','homeocean_scripts');
	function homeocean_scripts() {
		wp_enqueue_style('our-style', get_template_directory_uri().'/style.css');
		if ( current_user_can('manage_options') ){
			wp_enqueue_style('admin-style', get_template_directory_uri().'/admin.css');
		}
		wp_enqueue_script('mjquery',get_template_directory_uri().'/js/jquery-2.1.1.min.js');
		wp_enqueue_script('mjquery_ui',get_template_directory_uri().'/js/jquery-ui.min.js');
    	wp_enqueue_script('transform',get_template_directory_uri().'/js/jquery.transform.js');
		wp_enqueue_script('ammo',get_template_directory_uri().'/js/jquery.ammo.js');
		wp_enqueue_script('mobj',get_template_directory_uri().'/js/jquery.mobj.js');
    	wp_enqueue_script('carousel',get_template_directory_uri().'/js/jquery.waterwheelCarousel.js');
    	wp_enqueue_script('wsc',get_template_directory_uri().'/js/wsc.js');
    	wp_enqueue_script('hoslider',get_template_directory_uri().'/js/hoslider.js');
		wp_enqueue_script('script',get_template_directory_uri().'/js/script.js');
	}
?>