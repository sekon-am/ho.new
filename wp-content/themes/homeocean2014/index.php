<?php 
if(($page = get_query_var('pagename')) && ($page == 'catalog')): 
    get_template_part('catalog');
else:
    get_template_part('default');
endif;
?>
