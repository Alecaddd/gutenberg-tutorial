<?php
/**
 * Twenty Nineteen: Color Filter for overriding the colors schemes in a child theme
 *
 * @package WordPress
 * @subpackage TwentyNineteen
 * @since 1.0
 */

/**
 * Define default color filters.
 */

define( 'TWENTYNINETEEN_DEFAULT_HUE', 199 );        // H
define( 'TWENTYNINETEEN_DEFAULT_SATURATION', 100 ); // S
define( 'TWENTYNINETEEN_DEFAULT_LIGHTNESS', 33 );   // L

define( 'TWENTYNINETEEN_DEFAULT_SATURATION_SELECTION', 50 );
define( 'TWENTYNINETEEN_DEFAULT_LIGHTNESS_SELECTION', 90 );
define( 'TWENTYNINETEEN_DEFAULT_LIGHTNESS_HOVER', 23 );

/**
 * The default hue (as in hsl) used for the primary color throughout this theme
 *
 * @return number the default hue
 */
function twentynineteen_get_default_hue() {
	return apply_filters( 'twentynineteen_default_hue', TWENTYNINETEEN_DEFAULT_HUE );
}

/**
 * The default saturation (as in hsl) used for the primary color throughout this theme
 *
 * @return number the default saturation
 */
function twentynineteen_get_default_saturation() {
	return apply_filters( 'twentynineteen_default_saturation', TWENTYNINETEEN_DEFAULT_SATURATION );
}

/**
 * The default lightness (as in hsl) used for the primary color throughout this theme
 *
 * @return number the default lightness
 */
function twentynineteen_get_default_lightness() {
	return apply_filters( 'twentynineteen_default_lightness', TWENTYNINETEEN_DEFAULT_LIGHTNESS );
}

/**
 * The default saturation (as in hsl) used when selecting text throughout this theme
 *
 * @return number the default saturation selection
 */
function twentynineteen_get_default_saturation_selection() {
	return apply_filters( 'twentynineteen_default_saturation_selection', TWENTYNINETEEN_DEFAULT_SATURATION_SELECTION );
}

/**
 * The default lightness (as in hsl) used when selecting text throughout this theme
 *
 * @return number the default lightness selection
 */
function twentynineteen_get_default_lightness_selection() {
	return apply_filters( 'twentynineteen_default_lightness_selection', TWENTYNINETEEN_DEFAULT_LIGHTNESS_SELECTION );
}

/**
 * The default lightness hover (as in hsl) used when hovering over links throughout this theme
 *
 * @return number the default lightness hover
 */
function twentynineteen_get_default_lightness_hover() {
	return apply_filters( 'twentynineteen_default_lightness_hover', TWENTYNINETEEN_DEFAULT_LIGHTNESS_HOVER );
}

function twentynineteen_has_custom_default_hue() {
	return twentynineteen_get_default_hue() !== TWENTYNINETEEN_DEFAULT_HUE;
}
