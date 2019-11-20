import ScrollMagic from 'scrollmagic';
import { Linear, TimelineLite } from 'gsap';

// eslint-disable-next-line import/no-unresolved
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

import './slides.scss';

// Get elements that will be acted upon
const trigger = document.getElementById( 'slide-container' );
const slideTwo = document.getElementById( 'slide-two' );
const slideThree = document.getElementById( 'slide-three' );
const slideFour = document.getElementById( 'slide-four' );
const slideFive = document.getElementById( 'slide-five' );
const slideSix = document.getElementById( 'slide-six' );
const slideSeven = document.getElementById( 'slide-seven' );

const dots = [...document.getElementsByClassName( 'slide-dot' )];

const dotOne = document.getElementById( 'slide-dot-one' );
const dotTwo = document.getElementById( 'slide-dot-two' );
const dotThree = document.getElementById( 'slide-dot-three' );
const dotFour = document.getElementById( 'slide-dot-four' );
const dotFive = document.getElementById( 'slide-dot-five' );
const dotSix = document.getElementById( 'slide-dot-six' );
const dotSeven = document.getElementById( 'slide-dot-seven' );

const wipe = new TimelineLite()
  .add( 'slide-dot-one', '+=1' )
  .set( dotOne, { background: '#fff' }, '0' )

  .fromTo( slideTwo, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .set( dotOne, { background: 'none' }, '-=0.5' )
  .set( dotTwo, { background: '#fff' }, '-=0.5' )
  .add( 'slide-dot-two', '+=1' )

  .fromTo( slideThree, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .set( dotTwo, { background: 'none' }, '-=0.5' )
  .set( dotThree, { background: '#fff' }, '-=0.5' )
  .add( 'slide-dot-three' )

  .fromTo( slideFour, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .set( dotThree, { background: 'none' }, '-=0.5' )
  .set( dotFour, { background: '#fff' }, '-=0.5' )
  .add( 'slide-dot-four' )

  .fromTo( slideFive, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .set( dotFour, { background: 'none' }, '-=0.5' )
  .set( dotFive, { background: '#fff' }, '-=0.5' )
  .add( 'slide-dot-five', '+=1' )

  .fromTo( slideSix, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .set( dotFive, { background: 'none' }, '-=0.5' )
  .set( dotSix, { background: '#fff' }, '-=0.5' )
  .add( 'slide-dot-six', '+=1' )

  .fromTo( slideSeven, 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .set( dotSix, { background: 'none' }, '-=0.5' )
  .set( dotSeven, { background: '#fff' }, '-=0.5' )
  .add( 'slide-dot-seven', '+=1' );

const controller = new ScrollMagic.Controller();

if ( trigger && slideTwo && slideThree && slideFour && slideFive && slideSix && slideSeven ) {
  new ScrollMagic.Scene( {
    triggerElement: trigger,
    triggerHook: 'onLeave',
    duration: '1000%'
  } )
    .setPin( trigger )
    .setTween( wipe )
    .addTo( controller );
}

// const updateProgress = e => {
//   wipe.play( e.target.id, false );
// };

// dots.forEach( dot => {
//   dot.addEventListener( 'click', e => updateProgress( e ) );
// } );
