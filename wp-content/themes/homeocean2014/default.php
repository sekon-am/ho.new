<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="shortcut icon" href="favicon.png" type="image/png"/>
	<?php wp_head(); ?>
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description'); ?>" />
	<meta name="keywords" content="продажа морских аквариумов, самые большие аквариумы, самый большой аквариум, аквариум полукруглый, морской аквариум купить, изготовление аквариумов +из оргстекла, аквариумы +из акрилового стекла, аквариум +из оргстекла купить, большой аквариум купить, стоимость морского аквариума, большие аквариумы купить, большие аквариумы +в москве, изготовление акриловых аквариумов, акриловый аквариум купить, аквариум большой цена, аквариумы большие цены, морской аквариум +на заказ, цилиндрический аквариум -цена -купить, большой аквариум -самый -цена -купить, аквариум закругленный, аквариум цилиндрический цена, аквариум +из оргстекла -изготовление -купить, купить цилиндрический аквариум, аквариум +с гнутым стеклом, аквариумы большие -самый -цена -купить, аквариум +из оргстекла +на заказ, морской аквариум -продажа -стоимость -купить, аквариум акриловый +на заказ" />
	<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/images/favicon.ico" />
	<meta name="google-site-verification" content="yMNkN_Q8QtP9IcVyCAJg9NiMBUWfzzUp2AqdMQ_fGfk" />
	<meta name="viewport" content="width=1920, user-scalable=no" />
</head>
<body>
    
    <div id="loading-screen">
        <img id="loading" src="<?php bloginfo('template_url'); ?>/images/loading.gif"/>
        <img id="ho-logo-loading" src="<?php bloginfo('template_url'); ?>/images/ho-logo-loading.png"/>
    </div>
    
    <div id="menu-container">

        <div id="menu-social-icons">
            <a href="https://vk.com/planetaneptuna" target="_blank" id="social-icon-1" class="msi-item"><div class="hover"></div></a>
            <a href="https://www.facebook.com/planetaneptuna" target="_blank" id="social-icon-2" class="msi-item"><div class="hover"></div></a>
            <a href="#" target="_blank" id="social-icon-3" class="msi-item"><div class="hover"></div></a>
        </div>
        
        <a href="<?php bloginfo('url'); ?>" id="menu-logo"><div class="hover"></div></a>
        
        <div id="mm-tell"><div id="mm-truetell">+7 (499) 372-09-21</div><div id="mm-email"><a href="mailto:info@homeocean.ru">info@homeocean.ru</a></div></div>
        
        <div id="menu-items">
            <ul id="menu-poiner">
                <li class="first"><div></div></li>
                <li class="second"><div></div></li>
                <li class="third"><div></div></li>
            </ul>
            <a href="#slide-1" class="menu-item" id="menu-1"><div class="hover"></div></a>
            <a href="#slide-3" class="menu-item" id="menu-3"><div class="hover"></div></a>
            <a href="#slide-4" class="menu-item" id="menu-4"><div class="hover"></div></a>
            <a href="#slide-5" class="menu-item" id="menu-5"><div class="hover"></div></a>
            <a href="#slide-6" class="menu-item" id="menu-6"><div class="hover"></div></a>
            <a href="#slide-7" class="menu-item" id="menu-7"><div class="hover"></div></a>
        </div>

    </div>
    
<?php
get_template_part('slide1');
get_template_part('slide3');
get_template_part('slide4');
get_template_part('slide5');
get_template_part('slide6');
get_template_part('slide7');

wp_footer(); ?>
	
</body>
</html>
