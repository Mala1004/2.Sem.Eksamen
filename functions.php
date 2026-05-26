<?php
/**
 * Kadence functions and definitions
 *
 * This file must be parseable by PHP 5.2.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package kadence
 */

define( 'KADENCE_VERSION', '1.5.0' );
define( 'KADENCE_MINIMUM_WP_VERSION', '6.0' );
define( 'KADENCE_MINIMUM_PHP_VERSION', '7.4' );

// Bail if requirements are not met.
if ( version_compare( $GLOBALS['wp_version'], KADENCE_MINIMUM_WP_VERSION, '<' ) || version_compare( phpversion(), KADENCE_MINIMUM_PHP_VERSION, '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
	return;
}
// Include WordPress shims.
require get_template_directory() . '/inc/wordpress-shims.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/class-theme.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/functions.php';

// Initialize the theme.
call_user_func( 'Kadence\kadence' );

// HERFRA SKRIVER JEG SELV KODE i dokumentet, der er automatisk oprettet af Wordpress

//Funktion der skal køre, når Wordpress indlæser scripts
add_action('wp_enqueue_scripts', function() {
	//Beder specifikt om at indlæse den fil, der indeholder mit product array.
  wp_enqueue_script(
    'products-js',
	  //Stien til filen med arrayet
    get_template_directory_uri() . '/js/products.js',
	//Definerer at denne ikke er afhængig af andra scripts
    array(),
	//Ingen specifik version
    null,
	//Beder om at loade script, før body
    true
  );
  //Beder om at indlæse den fil der hedder main.js
  wp_enqueue_script(
    'main-js',
	  //Stien til filen med min funktion
    get_template_directory_uri() . '/js/main.js',
	  //Fortæller at denne side, er afhængig af mit array med produkter, og at products.js derfor skal læses først
    array('products-js'),
	  //filetime beder om at lave en specifik version/navn, der hjælper wordpress med at vide, om der skal hentes en ny version. 
    filemtime(get_template_directory() . '/js/main.js'),
	  //Beder om at loade script, før body
    true
  );
});
