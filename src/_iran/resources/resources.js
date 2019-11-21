import { toggleItems } from '../../utils/toggle';
import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

import './resources.scss';

// Check if mobile
const isMobile = window.innerWidth <= 500;

// Get all elements we will be acting upon
const sections = [...document.querySelectorAll( '.resource-section' )];
const buttons = [...document.querySelectorAll( '.resource-button' )];

// Change button color on click
const clickHandler = e => {
  if ( e?.target?.id ) {
    toggleItems( sections, e.target.id, 'hidden' );
    toggleItems( buttons, e.target.id, 'inactive' );
  }
};

// Add button click event listener if buttons exist and user is not on a mobile device
if ( !isMobile && buttons ) {
  buttons.forEach( btn => {
    btn.addEventListener( 'click', e => clickHandler( e ) );
  } );
}

// Display all sections if on mobile device
if ( isMobile && sections ) {
  sections.forEach( section => {
    if ( section.classList.contains( 'hidden' ) ) {
      section.classList.remove( 'hidden' );
    }
  } );
}

// Adds feed of CDP content to the block
const women = document.getElementById( 'resource-women-cdp-feed' );
const freedom = document.getElementById( 'resource-freedom-cdp-feed' );
const workers = document.getElementById( 'resource-workers-cdp-feed' );

if ( women && freedom && workers ) {
  buildFeed( women );
  buildFeed( freedom );
  buildFeed( workers );
}
