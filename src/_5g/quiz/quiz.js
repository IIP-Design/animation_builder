import { TweenLite, Back } from 'gsap';

import { toggleItems } from '../../utils/toggle';

import './quiz.scss';

// Initialize the position at the first card
let currentItem = 1;

// Get cards all required elements
const cards = [...document.querySelectorAll( '.tf-card' )];
const cardButtons = [...document.querySelectorAll( '.tf-card-button' )];
const navButtons = [...document.querySelectorAll( '.tf-button' )];

// Keeps track of the position
const updateCounter = ( el, number, total ) => {
  el.innerHTML = `${number} / ${total}`;
};

// Handle counter for mobile
const counterContainer = document.getElementById( 'tf-counter' );
const counter = document.createElement( 'p' );

// Add counter element to page
if ( counterContainer && counter ) {
  counterContainer.appendChild( counter );
  updateCounter( counter, 1, cards.length );
}

// Preset properties on cards
TweenLite.set( '.tf-card', { perspective: 400 } );
TweenLite.set( '.back', { rotationX: 180 } );
TweenLite.set( ['.back', '.front'], { backfaceVisibility: 'hidden' } );

// Flip the card to show the answer, and then flip back
const rotate = card => {
  TweenLite.to( card, 3, {
    ease: Back.easeIn,
    rotationX: -180,
    transformStyle: 'preserve-3d'
  } );
};

// Highlight nav button corresponding to the card currently in view
const updateNavButtons = id => {
  if ( navButtons ) {
    navButtons.forEach( btn => {
      if ( btn?.dataset?.id && btn.dataset.id === id ) {
        if ( !btn.classList.contains( 'selected' ) ) {
          btn.classList.add( 'selected' );
        }
      }

      if ( btn?.dataset?.id && btn.dataset.id !== id ) {
        if ( btn.classList.contains( 'selected' ) ) {
          btn.classList.remove( 'selected' );
        }
      }
    } );
  }
};

// Go to specified card
const navigateToCard = btn => {
  if ( btn?.dataset?.id ) {
    const { id } = btn.dataset;

    toggleItems( cards, id, 'hidden' );
    updateNavButtons( id );
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

// Manage card rotation
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
        updateCounter( counter, currentItem, cards.length );
      };

      button.addEventListener( 'click', () => nextCard( button ) );
    }
  } );
}

// Navigate using buttons
if ( navButtons ) {
  navButtons.forEach( btn => {
    btn.addEventListener( 'click', () => navigateToCard( btn ) );
  } );
}

// Navigate using arrows
const nextArrow = document.querySelector( '.tf-carousel-arrow.next' );
const prevArrow = document.querySelector( '.tf-carousel-arrow.prev' );

// Go to next/previous item, or wrap around if at the beginning/end of list
const goTo = where => {
  const isFirst = currentItem === 1;
  const isLast = currentItem === cards.length;

  if ( where === 'next' && !isLast ) {
    currentItem++; // eslint-disable-line no-plusplus
    toggleItems( cards, `myth-${currentItem}`, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  } else if ( where === 'next' && isLast ) {
    currentItem = 1;
    toggleItems( cards, `myth-${currentItem}`, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  } else if ( where === 'prev' && !isFirst ) {
    currentItem--; // eslint-disable-line no-plusplus
    toggleItems( cards, `myth-${currentItem}`, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  } else if ( where === 'prev' && isFirst ) {
    currentItem = cards.length;
    toggleItems( cards, `myth-${currentItem}`, 'hidden' );
    updateCounter( counter, currentItem, cards.length );
  }
};

// Add arrow event listeners
if ( nextArrow ) {
  nextArrow.addEventListener( 'click', () => goTo( 'next' ) );
}

if ( prevArrow ) {
  prevArrow.addEventListener( 'click', () => goTo( 'prev' ) );
}
