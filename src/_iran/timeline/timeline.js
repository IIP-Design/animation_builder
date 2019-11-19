import { TimelineMax } from 'gsap';

import { getScrollOffsets } from '../../utils/scrolling';

import './timeline.scss';

// Check if mobile
const isMobile = window.innerWidth <= 768;

// Get the top of the timeline section
const timelineSection = document.getElementById( 'timeline-section' );
const distanceFromTop = timelineSection.getBoundingClientRect().top;

// Get all elements upons which we will be acting
const cards = [...document.getElementsByClassName( 'timeline-card' )];
const dots = [...document.getElementsByClassName( 'timeline-dot' )];
const titles = [...document.getElementsByClassName( 'timeline-slide-title' )];

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
    cards.length > 0 &&
    dots.length > 0 &&
    titles.length > 0 &&
    timelineSection &&
    off >= distanceFromTop
  ) {
    runTimeline( dots, cards, titles );
    document.removeEventListener( 'scroll', playWhenAtTop );
    document.removeEventListener( 'touchmove', playWhenAtTop );
  }
};

// Add event listeners for automated animation if user is on mobile
if ( isMobile ) {
  document.addEventListener( 'scroll', playWhenAtTop );
  document.addEventListener( 'touchmove', playWhenAtTop );
}

// Change elements on hover - for use on desktop
const hoverEffect = el => {
  if ( el?.dataset?.year ) {
    const { year } = el.dataset;

    dots.forEach( dot => {
      if ( dot?.dataset?.year ) {
        if ( dot.dataset.year === year ) {
          dot.setAttribute( 'style', `background-color: ${activeColor}` );
        } else {
          dot.setAttribute( 'style', `background-color: ${inactiveColor}` );
        }
      }
    } );

    cards.forEach( card => {
      if ( card?.dataset?.year ) {
        if ( card.dataset.year === year ) {
          if ( card.children ) {
            const children = [...card.children];
            children.forEach( child => child.setAttribute( 'style', `color: ${activeColor}` ) );
          }
        } else if ( card.children ) {
          const children = [...card.children];
          children.forEach( child => child.setAttribute( 'style', `color: ${inactiveColor}` ) );
        }
      }
    } );

    titles.forEach( title => {
      if ( title?.dataset?.year ) {
        if ( title.dataset.year === year ) {
          title.setAttribute( 'style', 'display: block' );
        } else {
          title.setAttribute( 'style', 'display: none' );
        }
      }
    } );
  }
};

// Add event listeners for hover-based changes if user is on desktop
if ( !isMobile && cards ) {
  cards.forEach( card => card.addEventListener( 'mouseenter', () => hoverEffect( card ) ) );
  dots.forEach( dot => dot.addEventListener( 'mouseenter', () => hoverEffect( dot ) ) );
}
