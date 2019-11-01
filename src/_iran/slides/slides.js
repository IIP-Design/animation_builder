import ScrollMagic from 'scrollmagic';
import { Linear, TimelineMax } from 'gsap/TweenMax';

// eslint-disable-next-line import/no-unresolved
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

import './slides.scss';

const wipe = new TimelineMax()
  .fromTo( 'section.slide.two', 2, { xPercent: 100 }, { xPercent: 0, ease: Linear.easeNone }, '+=1' )
  .fromTo(
    'section.slide.three',
    2,
    { xPercent: 100 },
    { xPercent: 0, ease: Linear.easeNone },
    '+=1'
  );

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene( {
  triggerElement: '#slide-container',
  triggerHook: 'onLeave',
  duration: '100%'
} )
  .setPin( '#slide-container' )
  .setTween( wipe )
  .addTo( controller );
