<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи, язык WordPress и ABSPATH. Дополнительную информацию можно найти
 * на странице {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется сценарием создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения.
 *
 * @package WordPress
 */

if(file_exists('wp-config-local.php'))include_once('wp-config-local.php');

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'vh37047_ho');

/** Имя пользователя MySQL */
define('DB_USER', 'vh37047_ho');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'fczUV8BL');

/** Имя сервера MySQL */
define('DB_HOST', 'db01.hostline.ru');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется снова авторизоваться.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'd2/GA| J6E[@D$66<-~KP3|;xj<N8Z&:oL!mO;!>] aRR )EfD{DA<C!R|9#^=Zd');
define('SECURE_AUTH_KEY',  '86rk[@0!|%:A8)_/dJ|dCd;e(``o~/|n[Ho2#qQV/57`WS?b.s~qy1}x|/`kvrc`');
define('LOGGED_IN_KEY',    'Sp6 #2VpU&Pv^<eP{=*@#A@5vsqc}[!4*GVB{%p*nr4Q6H_%~.5e E^K8xEgEC_5');
define('NONCE_KEY',        'z% w_/95eJFY<$lq{>./tJTE1E8=*2[$s9]Lw _J|ZB+P{ece;zxWq>7if2/1Gha');
define('AUTH_SALT',        '3bG|Yn`lV=Zjn3g`3tY-DlXyWi^mA$w@k@[=6HZ/|lZsU>1/^rCLIE/K$JD.NwBw');
define('SECURE_AUTH_SALT', 'ZGCMmJCD_bQv39-x/XC//=6^6Bcm}2=nek[,d=^vyNv|l3bf)SZpU0>p7{*:C-m+');
define('LOGGED_IN_SALT',   'UFM&[=>1EB#&G=eY4,@VnY)O:u4{UjXdt$+?5o:b~bvyvKdVGdr{.|D -N,s?o/z');
define('NONCE_SALT',       't|`-tF}A^k 4DgP*!a<|GC[g_gksHdwu<s?rLoT+]nUq:S3_|3%QfPsBhez2Ie#f');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько блогов в одну базу данных, если вы будете использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Язык локализации WordPress, по умолчанию английский.
 *
 * Измените этот параметр, чтобы настроить локализацию. Соответствующий MO-файл
 * для выбранного языка должен быть установлен в wp-content/languages. Например,
 * чтобы включить поддержку русского языка, скопируйте ru_RU.mo в wp-content/languages
 * и присвойте WPLANG значение 'ru_RU'.
 */
define('WPLANG', 'ru_RU');

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Настоятельно рекомендуется, чтобы разработчики плагинов и тем использовали WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
