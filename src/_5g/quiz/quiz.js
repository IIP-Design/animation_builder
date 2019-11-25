import { TweenLite, Back } from 'gsap';

import { toggleItems } from '../../utils/toggle';

import './quiz.scss';

// Initialize the position at the first card
let currentItem = 1;

// Get cards
const cards = [...document.querySelectorAll( '.tf-card' )];
const cardButtons = [...document.querySelectorAll( '.tf-card-button' )];

// Preset properties on cards
TweenLite.set( '.back', { rotationX: 180 } );
TweenLite.set( ['.back', '.front'], { backfaceVisibility: 'hidden' } );

// Flip the card to show the answer, and then flip back
const rotate = card => {
  console.log( card );

  TweenLite.to( card, 3, {
    ease: Back.easeIn,
    rotationX: -180,
    transformStyle: 'preserve-3d'
  } );
};

// Go to specified card
const navigateToCard = btn => {
  if ( btn?.dataset?.id ) {
    toggleItems( cards, btn.dataset.id, 'hidden' );
    currentItem = Number( btn.dataset.id );
  }
};

// Flip inactive cards back to front
const resetCards = btn => {
  if ( cards && btn?.dataset?.id ) {
    cards.forEach( c => {
      if ( c.id !== btn.dataset.id ) {
        c.setAttribute( 'style', '' );
      }
    } );
  }
};

if ( cardButtons && cardButtons.length > 0 ) {
  cardButtons.forEach( button => {
    // Rotate cards on click
    if ( button.classList.contains( 'flip-card' ) ) {
      if ( cards && button?.dataset?.id ) {
        const parentCard = cards.filter( card => card.id === button.dataset.id )[0];

        button.addEventListener( 'click', () => rotate( parentCard ) );
      }
    }

    // Go from back of one card to the front of the next
    if ( button.classList.contains( 'next-card' ) ) {
      const nextCard = btn => {
        resetCards( btn );
        navigateToCard( btn );
        currentItem++; // eslint-disable-line no-plusplus
      };

      button.addEventListener( 'click', () => nextCard( button ) );
    }
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
  updateCounter( counter, 1, cards.length );
}

// ...Using arrows

const nextArrow = document.querySelector( '.tf-carousel-arrow.next' );
const prevArrow = document.querySelector( '.tf-carousel-arrow.prev' );

// Go to next/previous item, or wrap around if at the beginning/end of list
const goTo = where => {
  const isFirst = currentItem === 1;
  const isLast = currentItem === cards.length;

  if ( where === 'next' && !isLast ) {
    currentItem++; // eslint-disable-line no-plusplus
    toggleItems( cards, currentItem, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  } else if ( where === 'next' && isLast ) {
    currentItem = 1;
    toggleItems( cards, currentItem, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  } else if ( where === 'prev' && !isFirst ) {
    currentItem--; // eslint-disable-line no-plusplus
    toggleItems( cards, currentItem, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  } else if ( where === 'prev' && isFirst ) {
    currentItem = cards.length;
    toggleItems( cards, currentItem, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  }
};

if ( nextArrow ) {
  nextArrow.addEventListener( 'click', () => goTo( 'next' ) );
}

if ( prevArrow ) {
  prevArrow.addEventListener( 'click', () => goTo( 'prev' ) );
}

// ...Using buttons
const buttons = [...document.querySelectorAll( '.tf-button' )];

if ( buttons && buttons.length > 0 ) {
  buttons.forEach( btn => {
    btn.addEventListener( 'click', () => navigateToCard( btn ) );
  } );
}
