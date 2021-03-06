/**
 * Copyright of Mark One Lifestyle Inc.
 *
 * Authors:
 *     - Mike Lyons (m@mkone.co)
 */

var Gallery;

(function() {
    'use strict';

    Gallery = function( image_array, image_selector, left_selector, right_selector, dots_container_selector ) {
        this.image_array = image_array;
        this.image = $( image_selector );
        this.left = $( left_selector );
        this.right = $( right_selector );
        this.dots_container = $( dots_container_selector );

        if( !this.image || !this.left || !this.right || !this.dots_container ) throw Error( 'Missing' );

        this.position = 0;

        var _this = this;

        this.left.click( function() {
            _this.handleClick( -1 );
        } );

        this.right.click( function() {
            _this.handleClick( 1 );
        } );

        // Sneakly load them into the page, so they are cached in the browser
        image_array
            .forEach( function( image ) {
                var image_html = $( '<img />' );
                image_html.attr( 'src', image );
                image_html.css( 'display', 'none' );
                image_html.css( 'visible', 'false' );
                console.log( image_html );
                $( 'body' ).append( image_html );
            } );

        this.updateDots();
    };

    Gallery.prototype.updateDots = function() {
        var dots = this.dots_container.children( '.project_stills_circle' );
        var count = this.image_array.length;

        if( dots.length < count ) {
            for( var i = dots.length; i < count; i++ )
            {
                var new_dot = $( '<div></div>' ).addClass( 'project_stills_circle' );
                this.dots_container.append( new_dot );
            }
            dots = this.dots_container.children( '.project_stills_circle' )
        }

        dots.removeClass( 'project_stills_circle_filled' );
        $( dots[ this.position ] ).addClass( 'project_stills_circle_filled' );
    };

    Gallery.prototype.performTransition = function( next ) {
        var _this = this;

        this.position = next;

        $( _this.image ).fadeTo( 'fast', 0, function() {
            _this.image.attr( 'src', _this.image_array[ next ] );
            $( _this.image ).fadeTo( 'fast', 1 );
        } );

        this.updateDots();
    };

    /**
     * Handles an arrow click, pass in direction
     * @param direction the direction of click. 1 = right, -1 = left
     */
    Gallery.prototype.handleClick = function( direction ) {
        var next = this.position + direction;
        if( next >= 0 && next < this.image_array.length ) {
            this.performTransition( next );
        } else if( next < 0 ) {
            this.performTransition( this.image_array.length - 1 );
        } else if( next <= this.image_array.length ) {
            this.performTransition( 0 );
        }
    };

})();