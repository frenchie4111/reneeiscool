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

    var _updateDots = function( val, count ) {
        var dot_container = $( '.project_stills_circles_container' );
        if( !dot_container ) return;

        var dots = dot_container.children( '.project_stills_circle' );

        if( dots.length < count ) {
            for( var i = dots.length; i < count; i++ )
            {
                var new_dot = $( '<div></div>' ).addClass( 'project_stills_circle' );
                dot_container.append( new_dot );
            }
            dots = dot_container.children( '.project_stills_circle' )
        }

        dots.removeClass( 'project_stills_circle_filled' );
        $( dots[ val ] ).addClass( 'project_stills_circle_filled' );
    };

    var _galleryTransition = function( img, next ) {
        $( img ).fadeTo( 'fast', 0, function() {
            img.attr( 'src', gallery_images[ next ] );
            $( img ).fadeTo( 'fast', 1 );
        } );

        _updateDots( next );
    };

    var _gallery = function() {
        var gallery_box = $( '.project_stills_still_box' );
        if( !gallery_box ) return;

        var gallery_image = gallery_box.children( 'img' );
        var left = $( '#left_arrow' );
        var right = $( '#right_arrow' );
        if( !gallery_image || !left || !right ) return;

        left.click( function() {
            console.log( gallery_position );
            if( gallery_position <= 0 ) return;

            var last = gallery_position;
            gallery_position --;

            _galleryTransition( gallery_image, gallery_position );
        } );

        right.click( function() {
            console.log( gallery_position );
            if( gallery_position >= gallery_images.length - 1 ) return;

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
        _updateDots( gallery_position, gallery_images.length );
    } );

})();