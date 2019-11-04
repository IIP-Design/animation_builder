import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite } from 'gsap';

// eslint-disable-next-line import/no-unresolved
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

import './slides.scss';

// Get elements that will be acted upon
const trigger = document.getElementById( 'slide-container' );
const slideTwo = document.getElementById( 'slide-two' );
const slideThree = document.getElementById( 'slide-three' );

const wipe = new TimelineLite()
  .fromTo( slideTwo, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .fromTo( slideThree, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' );

const controller = new ScrollMagic.Controller();

if ( trigger && slideTwo && slideThree ) {
  new ScrollMagic.Scene( {
    triggerElement: trigger,
    triggerHook: 'onLeave',
    duration: '300%'
  } )
    .setPin( trigger )
    .setTween( wipe )
    .addTo( controller );
}
