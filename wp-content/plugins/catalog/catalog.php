<?php
/*
Plugin Name: Homeocean catalog
Plugin URI: http://homeocean.ru
Description: Plugin to provide homeocean with a pages for Yandex catalog
Version: Номер версии плагина, например: 1.0
Author: Sekon
Author URI: http://homeocean.ru
*/

register_activation_hook(__FILE__,'hoc_install');
function hoc_install() {
    
    function createtable($name,$fields) {
        global $wpdb;
        $tablename = $wpdb->prefix . $name;
        if($wpdb->get_var("show tables like '$tablename'") != $tablename) {
            $sql = "CREATE TABLE {$tablename} ({$fields});";
            require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
            dbDelta($sql);
        }
    }
    
    createtable('aquatypes',
        " id int(11) primary key auto_increment, "
        . " tag varchar(50) not null,"
        . " name varchar(50) not null,"
        . " activefields varchar(256) not null");
    
    createtable('aquas',
        " id int(11) primary key auto_increment, "
        . " name varchar(500) not null,"
        . " a int(11),"
        . " b int(11),"
        . " c int(11),"
        . " d int(11),"
        . " h int(11),"
        . " r int(11),"
        . " aqua decimal(10,2),"
        . " thumb decimal(10,2),"
        . " cap decimal(10,2),"
        . " decor decimal(10,2),"
        . " txt text");
    
}

register_deactivation_hook( __FILE__, 'hoc_uninstall');
function hoc_uninstall() {
    function droptable($name) {
        global $wpdb;
        $wpdb->query( "DROP TABLE IF EXISTS {$wpdb->prefix}{$name}" );
    }
    droptable('aquatypes');
    droptable('aquas');
}

add_action( 'admin_menu', 'hoc_menu' );
function hoc_menu() {
    add_menu_page( 'Homeocean Aqua Catalog', 'Aqua Catalog', 'manage_options', 'homeocean-aqua-catalog', 'hoc_catalog' );
}
function hoc_catalog() {
    wp_register_style('bootstrap',  plugins_url('/css/bootstrap.min.css', __FILE__));
    wp_enqueue_style('bootstrap');
    wp_register_script('angular',plugins_url('/js/angular.min.js', __FILE__));
    wp_enqueue_script('angular');
    wp_register_script('ctrl',plugins_url('/js/ctrl.js', __FILE__));
    wp_enqueue_script('ctrl');
    require_once(dirname(__FILE__) . '/aquaform.php');
}

add_action('init','hoc_init');
function hoc_init() {
    die(111111111);
    if($srv = get_query_var('hocsrv')){
        global $wpdb;
        $res = array();
        switch($srv){
            case 'aquatypes':
                $aquatypes = $wpdb->get_results("SELECT tag,name FROM aquatypes");
                print_r($aquatypes);
               break;
            case '':
               break;
            default:
        }
        header('Content-Type: application/json');
        die(json_encode( (object) $res ));
    }
}
?>