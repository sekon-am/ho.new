<?php
/*
Plugin Name: Homeocean catalog
Plugin URI: http://homeocean.ru
Description: Plugin to provide homeocean with a pages for Yandex catalog
Version: 1.3
Author: Sekon.am.p
Author URI: http://homeocean.ru
*/

register_activation_hook(__FILE__,'hoc_install');
function hoc_install() {
    
    function createtable($name,$fields) {
        global $wpdb;
        $tablename = $wpdb->prefix . $name;
        if($wpdb->get_var("show tables like '$tablename'") != $tablename) {
            $sql = "CREATE TABLE {$tablename} ({$fields}) CHARACTER SET utf8;";
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
        . " price decimal(10,2),"
        . " thumb decimal(10,2),"
        . " cap decimal(10,2),"
        . " decor decimal(10,2),"
        . " txt text,"
        . " aquatype_id int(11) not null,"
        . " img varchar(255) default ''");
    
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
    hoc_add_style('bootstrap','/css/bootstrap.min.css');
    hoc_add_style('bootstrap-spinedit-style','/css/bootstrap-spinedit.css');
    hoc_add_style('hoc_style','/css/style.css');
    hoc_add_script('jquery','/js/jquery.min.js');
    hoc_add_script('angular','/js/angular.min.js');
    hoc_add_script('ng-file-upload-shim','/js/ng-file-upload-shim.js');
    hoc_add_script('ng-file-upload','/js/ng-file-upload.js');
    hoc_add_script('bootstrap-spinedit-js','/js/bootstrap-spinedit.js');
    hoc_add_script('ctrl','/js/ctrl.js');
    hoc_add_script('script','/js/script.js');
    require_once(dirname(__FILE__) . '/aquaform.php');
}
function hoc_add_script($name,$localpath)  {
    wp_register_script($name,plugins_url($localpath, __FILE__));
    wp_enqueue_script($name);
}
function hoc_add_style($name,$localpath)  {
    wp_register_style($name,  plugins_url($localpath, __FILE__));
    wp_enqueue_style($name);
}

add_action('plugins_loaded','hoc_init');
function esc($name) {
    return addslashes($_REQUEST[$name]);
}
function hoc_init() {
    if($srv = esc('hocsrv')){
        global $wpdb;
        $res = new stdClass();
        switch($srv){
            case 'aquatypes':
                $res = $wpdb->get_results("SELECT tag,name FROM {$wpdb->prefix}aquatypes");
               break;
            case 'aquasizes':
                if($tag = esc('aquatype')){
                    $aquatype = $wpdb->get_row("SELECT id,activefields FROM {$wpdb->prefix}aquatypes WHERE tag='{$tag}'");
                    $res->aquaprototype = new stdClass();
                    foreach(explode(',',$aquatype->activefields) as $field){
                        $res->aquaprototype->$field = 1; 
                    }
                    $res->aquas = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}aquas WHERE aquatype_id='{$aquatype->id}'");
                }
               break;
            case 'aquaimgupload':
                if ( ! function_exists( 'wp_handle_upload' ) ) {
                    require_once( ABSPATH . 'wp-admin/includes/file.php' );
                }
                $uploadedfile = $_FILES['file'];
                $movefile = wp_handle_upload( $uploadedfile, array( 'test_form' => false ) );
                if ( $movefile && !isset( $movefile['error'] ) ) {
                    $res->result = 'ok';
                    $res->file = substr(
                        $movefile['file'],
                        strlen( get_home_path() . 'wp-content/uploads/' )+8
                    );
                    $res->url = $movefile['url'];
                } else {
                    $res->result = 'fail';
                }
               break;
            default:
        }
        header('Content-Type: application/json; charset=utf-8');
        die(json_encode( (object) $res ));
    }
}

function putlog($msg) {
    file_put_contents('log.txt',$msg."\n",FILE_APPEND);
}
?>