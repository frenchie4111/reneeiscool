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

        if( $( document ).scrollTop() > 5 ) {
            menu_area.addClass( 'menu_background', 1000 );
        } else {
            menu_area.removeClass( 'menu_background' );
        }
    };

    $( document ).ready( function() {
        $( document ).scroll( _toggleTop );
    } );

})();