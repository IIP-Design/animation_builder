import { toggleItems } from '../../utils/toggle';

import './briefing.scss';

const sections = [...document.querySelectorAll( '.briefing-section' )];
const buttons = [...document.querySelectorAll( '.briefing-button' )];

// Change Button Color on Click
const clickHandler = e => {
  if ( e.target && e.target.id ) {
    toggleItems( sections, e.target.id, 'hidden' );
    toggleItems( buttons, e.target.id, 'inactive' );
  }
};

buttons.forEach( btn => {
  btn.addEventListener( 'click', e => clickHandler( e ) );
} );
