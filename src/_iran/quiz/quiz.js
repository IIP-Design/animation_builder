import { TweenLite, Back } from 'gsap';

import { toggleItems } from '../../utils/toggle';

import './quiz.scss';

// Get cards
const cards = document.querySelectorAll( '.tf-card' );
const cardArray = [...cards];

// Preset properties on cards
TweenLite.set( '.tf-card', { perspective: 400 } );
TweenLite.set( '.back', { rotationX: 180 } );
TweenLite.set( ['.back', '.front'], { backfaceVisibility: 'hidden' } );

// Flip the card to show the answer, and then flip back
const rotate = card => {
  TweenLite.to( card, 2, {
    ease: Back.easeIn,
    rotationX: -180,
    transformStyle: 'preserve-3d'
  } );

  TweenLite.to( card, 2, {
    delay: 3,
    ease: Back.easeIn,
    rotationX: -360,
    transformStyle: 'preserve-3d'
  } );
};

// Rotate cards on click
if ( cards && cardArray.length > 0 ) {
  cardArray.forEach( card => {
    card.addEventListener( 'click', () => rotate( card ) );
  } );
}

// Navigate between slides...

// Handle counter for mobile
const counterContainer = document.getElementById( 'tf-counter' );
const counter = document.createElement( 'p' );

const updateCounter = ( el, number, total ) => {
  el.innerHTML = `${number} / ${total}`;
};

if ( counterContainer && counter ) {
  counterContainer.appendChild( counter );
  updateCounter( counter, 1, cardArray.length );
}

// ...Using arrows
let currentItem = 1;

const nextArrow = document.querySelector( '.tf-carousel-arrow.next' );
const prevArrow = document.querySelector( '.tf-carousel-arrow.prev' );

// Go to next/previous item, or wrap around if at the beginning/end of list
const goTo = where => {
  const isFirst = currentItem === 1;
  const isLast = currentItem === cardArray.length;

  if ( where === 'next' && !isLast ) {
    currentItem++; // eslint-disable-line no-plusplus
    toggleItems( cardArray, currentItem );
    updateCounter( counter, currentItem, cardArray.length );
  } else if ( where === 'next' && isLast ) {
    currentItem = 1;
    toggleItems( cardArray, currentItem );
    updateCounter( counter, currentItem, cardArray.length );
  } else if ( where === 'prev' && !isFirst ) {
    currentItem--; // eslint-disable-line no-plusplus
    toggleItems( cardArray, currentItem );
    updateCounter( counter, currentItem, cardArray.length );
  } else if ( where === 'prev' && isFirst ) {
    currentItem = cardArray.length;
    toggleItems( cardArray, currentItem );
    updateCounter( counter, currentItem, cardArray.length );
  }
};

if ( nextArrow ) {
  nextArrow.addEventListener( 'click', () => goTo( 'next' ) );
}

if ( prevArrow ) {
  prevArrow.addEventListener( 'click', () => goTo( 'prev' ) );
}

// ...Using buttons
const buttons = document.querySelectorAll( '.tf-button' );
const btnArray = [...buttons];

if ( buttons && btnArray.length > 0 ) {
  btnArray.forEach( btn => {
    const navigateToBox = () => {
      toggleItems( cardArray, btn.dataset.id );
      currentItem = Number( btn.dataset.id );
    };

    btn.addEventListener( 'click', navigateToBox );
  } );
}
