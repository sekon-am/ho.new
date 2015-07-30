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
    global $wpdb;
    
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
    
    $wpdb->insert($wpdb->prefix . 'aquatypes',array(
        'tag' => 'common',
        'name' => 'Стандарт',
        'activefields' => 'a,b,h',
    ));
    $wpdb->insert($wpdb->prefix . 'aquatypes',array(
        'tag' => 'commonplus',
        'name' => 'Стандарт Плюс',
        'activefields' => 'a,b,h,r',
    ));
    $wpdb->insert($wpdb->prefix . 'aquatypes',array(
        'tag' => 'cylinder',
        'name' => 'Цилиндр',
        'activefields' => 'd,h',
    ));
    $wpdb->insert($wpdb->prefix . 'aquatypes',array(
        'tag' => 'semicylijndr',
        'name' => 'Полуцелдиндр',
        'activefields' => 'a,b,h',
    ));
    $wpdb->insert($wpdb->prefix . 'aquatypes',array(
        'tag' => 'arc',
        'name' => 'Арка',
        'activefields' => 'a,b,h',
    ));
    $wpdb->insert($wpdb->prefix . 'aquatypes',array(
        'tag' => 'segment',
        'name' => 'Сегмент',
        'activefields' => 'a,b,h,r',
    ));
    $wpdb->insert($wpdb->prefix . 'aquatypes',array(
        'tag' => 'mix',
        'name' => 'Микс',
        'activefields' => 'a,b,h,r',
    ));
        
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
        . " img varchar(255) default '',"
        . " aquatype_id int(11) not null");
    
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
    hoc_add_script('jquery','/js/jquery-1.11.3.min.js');
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
function hoc_get_aquatypes() {
    global $wpdb;
    return $wpdb->get_results("SELECT id,name FROM {$wpdb->prefix}aquatypes");
}
function hoc_norm_aqua($aqua) {
    foreach( $aqua as $key => $val ){
        if(in_array($key, array('a','b','c','d','h','r',))){
            $res->aquas[$aquaid]->$key = intval($val);
        }
        if(in_array($key, array('price','thumb','cap','decor',))){
            $res->aquas[$aquaid]->$key = floatval($val);
        }
    }
    return $aqua;
}
function hoc_get_aquasizes($aqutype_id) {
    global $wpdb;
    $res = new stdClass();
    $aquatype = $wpdb->get_row("SELECT id,activefields FROM {$wpdb->prefix}aquatypes WHERE id='{$aquatype_id}'");
    $res->aquaprototype = new stdClass();
    foreach(explode(',',$aquatype->activefields) as $field){
        $res->aquaprototype->$field = 1; 
    }
    $res->aquas = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}aquas WHERE aquatype_id='{$aquatype->id}'");
    foreach( $res->aquas as $aquaid => $aqua ){
        $res->aquas[$aquaid] = hoc_norm_aqua($aqua);
    }
    return $res;
}
function hoc_get_aquasize($id) {
    global $wpdb;
    return hoc_norm_aqua( $wpdb->get_row("SELECT * FROM {$wpdb->prefix}aquas WHERE id='{$id}'") );
}
function hoc_init() {
    if($srv = esc('hocsrv')){
        global $wpdb;
        $res = new stdClass();
        switch($srv){
            case 'aquatypes':
                $res = hoc_get_aquatypes();
               break;
            case 'aquasizes':
                if($id = esc('aquatype')){
                    $res = hoc_get_aquasizes($id);
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
                        strlen( get_home_path() . 'wp-content/uploads/' )
                    );
                    $res->url = $movefile['url'];
                } else {
                    $res->result = 'fail';
                }
                break;
            case 'save':
                $params = json_decode(file_get_contents('php://input'),true);
                $aqua = $params['aqua'];
                $aqua['aquatype_id'] = $params['type'];
                $res->result = 'fail';
                
                foreach($aqua as $key => $val){
                    $aqua[$key] = addslashes($val);
                }
                
                if($aqua['id']){
                    if($num_rows = $wpdb->update(
                        $wpdb->prefix . 'aquas',
                        $aqua,
                        array('id'=>$aqua['id'])
                    )){
                        $res->result = 'ok';
                        $res->num_rows = $num_rows;
                    }
                }else{
                    unset($aqua['id']);
                    if($wpdb->insert($wpdb->prefix . 'aquas',$aqua)){
                        $res->result = 'ok';
                        $res->insert_id = $wpdb->insert_id;
                    }
                }
                break;
            case 'rmaqua':
                $res->result = 'fail';
                if($id = esc('id')){
                    if($num_rows = $wpdb->delete($wpdb->prefix . 'aquas', array(
                        'id' => $id,
                    ))) {
                        $res->result = 'ok';
                        $res->num_rows = $num_rows;
                    }
                }else{
                    $res->errors = array('Неверно указан идентификатор аквариума');
                }
                break;
            case 'uploadspath':
                $upload_dirs = wp_upload_dir();
                $res->uploadspath = $upload_dirs['baseurl'] .'/';
                break;
            default:
        }
        header('Content-Type: application/json; charset=utf-8');
        die(json_encode( (object) $res ));
    }
}

/*add_action('init', 'hoc_add_catalog_page');
function hoc_add_catalog_page() {
    add_rewrite_rule('catalog/(.*)', 'index.php?pagename=catalog&r=$matches[1]', 'top');
}

add_filter( 'query_vars', 'hoc_query_vars' );
function hoc_query_vars( $query_vars ){
    $query_vars[] = 'r';
    return $query_vars;
}*/

function putlog($msg) {
    file_put_contents('log.txt',$msg."\n",FILE_APPEND);
}
?>