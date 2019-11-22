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
const headers = [...document.getElementsByClassName( 'timeline-slide-title-mobile' )];
const images = [...document.getElementsByClassName( 'timeline-overlay' )];
const titles = [...document.getElementsByClassName( 'timeline-slide-title' )];

// Set color values
const activeColor = '#c1a783';
const activeTextColor = '#333333';
const inactiveColor = '#666666';
const activeOpacity = '0.5';

// Define how each timeline behaves
const runTimeline = ( arr1, arr2, arr3 ) => {
  const activeBg = { backgroundColor: activeColor };
  const inactiveBg = { backgroundColor: activeTextColor };

  // Initialize timelines
  const tlDots = new TimelineMax( { repeat: -1 } );
  const tlHeaders = new TimelineMax( { repeat: -1 } );
  const tlPhoto = new TimelineMax( { repeat: -1 } );

  arr1.forEach( el => {
    tlDots.fromTo( el, 3.9, inactiveBg, activeBg ).to( el, 0.1, inactiveBg );
  } );

  arr2.forEach( el => {
    tlHeaders
      .fromTo( el, 2, { display: 'none' }, { display: 'flex' } )
      .to( el, 2, { display: 'none' } );
  } );

  arr3.forEach( el => {
    if ( el?.dataset?.photo ) {
      const activePhoto = {
        backgroundImage: `url('${el.dataset.photo}')`,
        opacity: activeOpacity,
        visibility: 'visible'
      };
      const inactivePhoto = { opacity: 0, visibility: 'hidden' };

      tlPhoto.fromTo( el, 3.9, inactivePhoto, activePhoto ).to( el, 0.1, inactivePhoto );
    }
  } );
};

// Kick off timeline animation when section reaches top of the screen
const playWhenAtTop = e => {
  const off = getScrollOffsets().y;

  if (
    cards &&
    dots &&
    images &&
    cards.length > 0 &&
    dots.length > 0 &&
    images.length > 0 &&
    timelineSection &&
    off >= distanceFromTop
  ) {
    runTimeline( dots, headers, images );
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
            children.forEach( child => {
              child.setAttribute( 'style', `color: ${activeTextColor}` );
            } );
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

    images.forEach( image => {
      if ( image?.dataset?.year ) {
        if ( image.dataset.year === year ) {
          if ( image.dataset.photo ) {
            const { photo } = image.dataset;

            image.setAttribute(
              'style',
              `background-image: url('${photo}'); opacity: ${activeOpacity}; visibility: visible; `
            );
          }
        } else {
          image.setAttribute( 'style', 'opacity: 0; visibility: hidden;' );
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
