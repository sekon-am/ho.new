<?php 
if(($page = get_query_var('pagename')) && ($page == 'catalog')): 
    add_action('wp_enqueue_scripts','homeocean_catalog');
    function homeocean_catalog() {
	wp_enqueue_style('catalog-style', get_template_directory_uri().'/catalog.css');
	wp_enqueue_script('mobj',get_template_directory_uri().'/js/catalog.js');
    }
    get_template_part('catalog');
else:
    add_action('wp_enqueue_scripts','homeocean_default');
    function homeocean_default() {
	wp_enqueue_script('mobj',get_template_directory_uri().'/js/jquery.mobj.js');
        wp_enqueue_script('carousel',get_template_directory_uri().'/js/jquery.waterwheelCarousel.js');
        wp_enqueue_script('wsc',get_template_directory_uri().'/js/wsc.js');
        wp_enqueue_script('hoslider',get_template_directory_uri().'/js/hoslider.js');
	wp_enqueue_script('script',get_template_directory_uri().'/js/script.js');
    }
    get_template_part('default');
endif;
?>
