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

    var _galleryTransition = function( img, next ) {
        console.log( 'Transitioning', img, next );

        img.attr( 'src', gallery_images[ next ] );
    };

    var _gallery = function() {
        var gallery_box = $( '.project_stills_still_box' );
        if( !gallery_box ) return;

        var gallery_image = gallery_box.children( 'img' );
        var left = $( '#left_arrow' );
        var right = $( '#right_arrow' );
        if( !gallery_image || !left || !right ) return;

        console.log( 'Setting Up Gallery' );
        console.log( gallery_images[ gallery_position ] );

        left.click( function() {
            console.log( gallery_position );
            if( gallery_position <= 0 ) return;

            var last = gallery_position;
            gallery_position --;

            _galleryTransition( gallery_image, gallery_position );
        } );

        right.click( function() {
            console.log( gallery_position );
            if( gallery_position > gallery_images.length ) return;

            var last = gallery_position;
            gallery_position ++;

            _galleryTransition( gallery_image, gallery_position );
        } );
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
            $( this ).children( '.work_item_hover' ).css( 'visibility', 'visible' );
        }, function() {
            $( this ).children( '.work_item_hover' ).css( 'visibility', 'hidden' );
        } );

        _gallery();
    } );

})();