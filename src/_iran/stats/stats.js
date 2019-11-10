import { TimelineMax, Power2 } from 'gsap';
import ScrollMagic from 'scrollmagic';

import './stats.scss';

const statOne = document.getElementById( 'stat-1' );
const statTwo = document.getElementById( 'stat-2' );
const statThree = document.getElementById( 'stat-3' );

// Initialize counters with 0 values
const counter = {
  one: { val: 0 },
  two: { val: 0 },
  three: { val: 0 }
};

// Change the value displayed by the stats block
const countUp = ( el, count ) => {
  el.innerHTML = Math.ceil( count.val );
};

// Run the stats animation
const runStats = () => {
  const tl = new TimelineMax(); // Set up new timeline for tweens

  if ( statOne && statTwo && statThree ) {
    tl.to( counter.one, 5, {
      val: statOne.getAttribute( 'data-stat' ),
      onUpdate: () => countUp( statOne, counter.one ),
      ease: Power2.easeOut
    } )
      .to(
        counter.two,
        5,
        {
          val: statTwo.getAttribute( 'data-stat' ),
          onUpdate: () => countUp( statTwo, counter.two ),
          ease: Power2.easeOut
        },
        0 // Start without delay
      )
      .to(
        counter.three,
        5,
        {
          val: statThree.getAttribute( 'data-stat' ),
          onUpdate: () => countUp( statThree, counter.three ),
          ease: Power2.easeOut
        },
        0 // Start without Delay
      );
  }
};

// Set the animation trigger using Scroll Magic
const start = document.querySelector( '.stats-box-bg' );

const controller = new ScrollMagic.Controller();

if ( start ) {
  new ScrollMagic.Scene( {
    triggerElement: start,
    triggerHook: 'onCenter',
    duration: '100%'
  } )
    .setTween( runStats )
    .addTo( controller );
}
