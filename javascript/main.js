/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

function OpenResume() {
    var win = window.open('resume.pdf', '_blank');
    win.focus();
}

(function() {
    'use strict';

    var WORK_LINK = 450;
    var CONTACT_LINK = 100000;

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

        $( "#work_link" ).click( function() {
            $( document ).scrollTop( WORK_LINK );
        } );

        $( "#contact_link" ).click( function() {
            $( document ).scrollTop( CONTACT_LINK );
        } );

        $( '.work_item' ).hover( function() {
            $( this ).children( '.work_item_hover' ).stop();
            $( this ).children( '.work_item_hover' ).css( 'opacity', 0 );
            $( this ).children( '.work_item_hover' ).css( 'visibility', 'visible' );
            $( this ).children( '.work_item_hover' ).fadeTo( "medium", 1 );
        }, function() {
            $( this ).children( '.work_item_hover' ).stop();
            $( this ).children( '.work_item_hover' ).fadeTo( "medium", 0, function() {
                $( this ).children( '.work_item_hover' ).css( 'visibility', 'hidden' );
            } );
        } );
    } );

})();