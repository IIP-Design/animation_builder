import { TimelineMax, Power2 } from 'gsap';

import './hero.scss';

const tl = new TimelineMax( { repeat: -1 } );
const line = document.getElementsByClassName( 'hero-line' );
const lineArray = [...line];

lineArray.forEach( element => {
  tl.to( element, 2.5, { opacity: 1 } ).to( element, 2.5, { opacity: 0, ease: Power2.easeIn }, '+=1' );
} );
