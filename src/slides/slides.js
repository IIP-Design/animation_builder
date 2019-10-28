import { TimelineLite, TweenLite } from 'gsap';

import './slides.scss';

const fixed = document.getElementById( 'pinContainer' );
const distanceFromTop = fixed.offsetHeight;
const distanceScrolled = window.pageYOffset;
const distanceToFixed = distanceFromTop - distanceScrolled;

TweenLite.set( 'body', { perspective: 700 } );
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
  console.log( distanceToFixed );
  const SD = Number.isNaN( Number( e ) ) ? e.wheelDelta || -e.detail : e;
  if ( SD < 0 ) {
    tl.play();
  } else {
    tl.reverse();
  }
};

document.addEventListener( 'mousewheel', GO );
document.addEventListener( 'DOMMouseScroll', GO );
