<?php
$aquatypes = hoc_get_aquatypes();
$aquatype_id = get_query_var('aquatype') or $aquatype_id = $aquatypes[0]->id;
$aquasizes = hoc_get_aquasizes($aquatype_id);
$aqua_id = get_query_var('aqua');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>" />
	<meta name="keywords" content="продажа морских аквариумов, самые большие аквариумы, самый большой аквариум, аквариум полукруглый, морской аквариум купить, изготовление аквариумов +из оргстекла, аквариумы +из акрилового стекла, аквариум +из оргстекла купить, большой аквариум купить, стоимость морского аквариума, большие аквариумы купить, большие аквариумы +в москве, изготовление акриловых аквариумов, акриловый аквариум купить, аквариум большой цена, аквариумы большие цены, морской аквариум +на заказ, цилиндрический аквариум -цена -купить, большой аквариум -самый -цена -купить, аквариум закругленный, аквариум цилиндрический цена, аквариум +из оргстекла -изготовление -купить, купить цилиндрический аквариум, аквариум +с гнутым стеклом, аквариумы большие -самый -цена -купить, аквариум +из оргстекла +на заказ, морской аквариум -продажа -стоимость -купить, аквариум акриловый +на заказ" />
	<meta name="google-site-verification" content="yMNkN_Q8QtP9IcVyCAJg9NiMBUWfzzUp2AqdMQ_fGfk" />
	<meta name="viewport" content="width=1920, user-scalable=no" />
	<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/images/favicon.ico" />
	<?php wp_head(); ?>
</head>
<body>
    
    <div id="menu-container">

        <div id="menu-social-icons">
            <a href="https://vk.com/planetaneptuna" target="_blank" id="social-icon-1" class="msi-item"><div class="hover"></div></a>
            <a href="https://www.facebook.com/planetaneptuna" target="_blank" id="social-icon-2" class="msi-item"><div class="hover"></div></a>
            <a href="#" target="_blank" id="social-icon-3" class="msi-item"><div class="hover"></div></a>
        </div>
        
        <a href="<?php bloginfo('url'); ?>" id="menu-logo"><div class="hover"></div></a>
        
        <div id="mm-tell"><div id="mm-truetell">+7 (499) 372-09-21</div><div id="mm-email"><a href="mailto:info@homeocean.ru">info@homeocean.ru</a></div></div>
        
        <div id="menu-items">
            <a href="<?php echo home_url(); ?>#slide-1" class="menu-item" id="menu-1"><div class="hover"></div></a>
            <a href="<?php echo home_url(); ?>#slide-3" class="menu-item" id="menu-3"><div class="hover"></div></a>
            <a href="<?php echo home_url(); ?>#slide-4" class="menu-item" id="menu-4"><div class="hover"></div></a>
            <a href="<?php echo home_url(); ?>#slide-5" class="menu-item" id="menu-5"><div class="hover"></div></a>
            <a href="<?php echo home_url(); ?>#slide-6" class="menu-item" id="menu-6"><div class="hover"></div></a>
            <a href="<?php echo home_url(); ?>#slide-7" class="menu-item" id="menu-7"><div class="hover"></div></a>
        </div>

    </div>
    
    <div id="catalog">

        <img id="s7-fish_yb_small" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_yb_small.png"/>
        <img id="s7-fish_yellow_01" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_yellow_01.png"/>
        <img id="s7-fish_orange_01" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_orange_01.png"/>
        <img id="s7-fish_yellow_02" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_yellow_02.png"/>
        <img id="s7-fish_orange_02" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_orange_02.png"/>
        <img id="s7-fish_orange_03" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_orange_03.png"/>
        <img id="s7-fish_yb" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_yb.png"/>
        <img id="s7-fish_bw" class="objcenter" src="<?php bloginfo('template_url'); ?>/images/slide-1/fish_bw.png"/>


        <div class="catalog-content">

            <h1><?php echo $title; ?></h1>
            
            <div class="aquatypes-select">
<?php foreach($aquatypes as $aquatype): ?>
                <div class="aquatype-item<?php if($aquatype->id == $aquatype_id):?> active<?php endif; ?>">
                    <figure>
                        <a href="<?php echo site_url('catalog/'.$aquatype->id); ?>" title="<?php echo $aquatype->name; ?>">
                            <img src="<?php echo $aquatypeImgs[$aquatype->id]; ?>" alt="<?php echo $aquatype->name; ?>">
                            <span><?php echo $aquatype->name; ?></span>
                        </a>
                    </figure>
                </div>
<?php endforeach; ?>
            </div>

        </div>

        <?php get_template_part('hfooter'); ?>
    </div>
    
<?php wp_footer(); ?>
	
</body>
</html>
