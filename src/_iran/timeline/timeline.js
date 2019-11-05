import { TimelineMax } from 'gsap';

import { getScrollOffsets } from '../../utils/scrolling';

import './timeline.scss';

// Get the top of the timeline section
const timelineSection = document.getElementById( 'timeline-section' );
const distanceFromTop = timelineSection.getBoundingClientRect().top;

// Get all elements upons which we will be acting
const cards = document.getElementsByClassName( 'timeline-card' );
const dots = document.getElementsByClassName( 'timeline-dot' );
const titles = document.getElementsByClassName( 'timeline-slide-title' );

// Add selected elements to an array
const cardArray = [...cards];
const dotArray = [...dots];
const titleArray = [...titles];

// Set color values
const activeColor = '#d01319';
const inactiveColor = '#0a314d';

// Define how each timeline behaves
const runTimeline = ( arr1, arr2, arr3 ) => {
  const activeBg = { backgroundColor: activeColor };
  const inactiveBg = { backgroundColor: inactiveColor };

  // Initialize timelines
  const tlDots = new TimelineMax( { repeat: -1 } );
  const tlText = new TimelineMax( { repeat: -1 } );
  const tlTitle = new TimelineMax( { repeat: -1 } );

  arr1.forEach( el => {
    tlDots.fromTo( el, 2, inactiveBg, activeBg ).to( el, 2, inactiveBg );
  } );

  arr2.forEach( el => {
    tlText
      .fromTo( el.children, 2, { color: inactiveColor }, { color: activeColor } )
      .to( el.children, 2, { color: inactiveColor } );
  } );

  arr3.forEach( el => {
    tlTitle.fromTo( el, 2, { display: 'none' }, { display: 'block' } ).to( el, 2, { display: 'none' } );
  } );
};

// Kick off timeline animation when section reaches top of the screen
const playWhenAtTop = e => {
  const off = getScrollOffsets().y;

  if (
    cards &&
    dots &&
    titles &&
    cardArray.length > 0 &&
    dotArray.length > 0 &&
    titleArray.length > 0 &&
    timelineSection &&
    off >= distanceFromTop
  ) {
    runTimeline( dotArray, cardArray, titleArray );
    document.removeEventListener( 'scroll', playWhenAtTop );
    document.removeEventListener( 'touchmove', playWhenAtTop );
  }
};

document.addEventListener( 'scroll', playWhenAtTop );
document.addEventListener( 'touchmove', playWhenAtTop );
