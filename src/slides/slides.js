import { TimelineLite, TweenLite } from 'gsap';

import { getScrollOffsets } from '../utils/scrolling';

import './slides.scss';

// Get the top of the slide container section
const fixed = document.getElementById( 'slide-container' );
const distanceFromTop = fixed.getBoundingClientRect().top;

TweenLite.set( '#slide-container' );
const slides = document.querySelectorAll( '.panel' );
const tl = new TimelineLite( { paused: true } );

for ( let i = 0; i < slides.length; i++ ) {
  if ( i !== slides.length - 1 ) {
    tl.to( slides[i], 0.5, {} )
      .to( slides[i], 0.7, { xPercent: -100 }, `L${i}` )
      .from( slides[i + 1], 0.7, { xPercent: 100 }, `L${i}` )
      .from( slides[i + 1], 0.5, {} );
  }
}

const GO = e => {
  const off = getScrollOffsets();

  if ( off.y >= distanceFromTop ) {
    const SD = Number.isNaN( Number( e ) ) ? e.wheelDelta || -e.detail : e;
    if ( SD < 0 ) {
      tl.play();
    } else {
      tl.reverse();
    }
  }
};

document.addEventListener( 'mousewheel', GO );
document.addEventListener( 'DOMMouseScroll', GO );
