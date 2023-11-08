<?php
/**
* Plugin Name: ITP/IMA Interactive Header
* Description: ITP/IMA Interactive Header
 * Version: 0.1.0
 * Author: Lenin Compres (Lenino)
* Notes: to ne uploaded to itp server under web/html/plugins/wp-interactive-header/
*/

/*
  Start and ending tag to scrape https://tisch.nyu.edu/itp/
  for news and event content
*/

add_action( 'wp_enqueue_scripts', function(){
  
  wp_enqueue_script( 'googleAnalitics','https://www.googletagmanager.com/gtag/js?id=G-54YGZP2VQT' );

  wp_enqueue_script( 'interactiveBranding','https://www.itp.nyu.edu/branding/header/contentScript.js', array(), false, array('strategy' => 'defer' ));

  wp_enqueue_style( 'interactiveStyle', 'https://www.itp.nyu.edu/branding/header/style.css' );

}); 

?>