import { toggleItems } from '../../utils/toggle';

import './briefing.scss';

// Check if mobile
const isMobile = window.innerWidth <= 500;

const sections = [...document.querySelectorAll( '.briefing-section' )];
const buttons = [...document.querySelectorAll( '.briefing-button' )];

// Display all sections if on mobile device
if ( isMobile && sections ) {
  sections.forEach( section => {
    if ( section.classList.contains( 'hidden' ) ) {
      section.classList.remove( 'hidden' );
    }
  } );
}

// Change Button Color on Click
const clickHandler = e => {
  if ( e?.target?.id ) {
    toggleItems( sections, e.target.id, 'hidden' );
    toggleItems( buttons, e.target.id, 'inactive' );
  }
};

buttons.forEach( btn => {
  btn.addEventListener( 'click', e => clickHandler( e ) );
} );
