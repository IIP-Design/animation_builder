import { TimelineMax } from 'gsap';

import { getScrollOffsets } from '../../utils/scrolling';

import './timeline.scss';

// Get the top of the timeline section
const timelineSection = document.getElementById( 'timeline-section' );
const distanceFromTop = timelineSection.getBoundingClientRect().top;

// Initialize timelines
const tl = new TimelineMax( { paused: true, repeat: 0 } );
const tl2 = new TimelineMax( { paused: true, repeat: 0 } );

// Get all elements upons which we will be acting
const cards = document.getElementsByClassName( 'timeline-card' );
const dots = document.getElementsByClassName( 'timeline-dot' );

// Add selected elements to an array
const cardArray = [...cards];
const dotArray = [...dots];

// Set color values
const activeColor = '#d01319';
const inactiveColor = '#0a314d';

// Define how each timeline behaves
const runTimeline = ( arr1, arr2 ) => {
  const activeBg = { backgroundColor: activeColor };
  const inactiveBg = { backgroundColor: inactiveColor };

  arr1.forEach( el => {
    tl.fromTo( el, 2, inactiveBg, activeBg )
      .to( el, 2, inactiveBg )
      .play();
  } );

  arr2.forEach( el => {
    tl2
      .fromTo( el.children, 2, { color: inactiveColor }, { color: activeColor } )
      .to( el.children, 2, { color: inactiveColor } )
      .play();
  } );
};

// Kick off timeline animation when section reaches top of the screen
const playWhenAtTop = e => {
  const off = getScrollOffsets();

  if ( off.y >= distanceFromTop && cards && dots && cardArray.length > 0 && dotArray.length > 0 ) {
    runTimeline( dotArray, cardArray );
  }
};

document.addEventListener( 'mousewheel', playWhenAtTop );
document.addEventListener( 'DOMMouseScroll', playWhenAtTop );
