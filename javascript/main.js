/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var _toggleTop = function() {
        var menu_area = $( '#menu_area' );

        var picture_height = $( '#header_image' ).height();
        var header_height = menu_area.height();

        var threshhold = picture_height - header_height;

        if( $( document ).scrollTop() > threshhold ) {
            menu_area.addClass( 'menu_background', 2000 );
        }
        if( $( document ).scrollTop() < threshhold ) {
            menu_area.removeClass( 'menu_background' );
        }
    };

    $( document ).ready( function() {
        $( document ).scroll( _toggleTop );
    } );

})();