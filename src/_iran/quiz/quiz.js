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

const rotate = card => {
  TweenLite.to( card, 2, {
    ease: Back.easeIn,
    rotationX: -180,
    transformStyle: 'preserve-3d'
  } );
};

const rotateBack = card => {
  TweenLite.to( card, 2, { rotationX: 0 } );
};

// Rotate cards on hover
cardArray.forEach( card => {
  card.addEventListener( 'mouseover', () => rotate( card ) );
  card.addEventListener( 'mouseleave', () => rotateBack( card ) );
} );

// Navigate between slides...

// Using arrows
let currentItem = 1;

const nextArrow = document.querySelector( '.tf-carousel-arrow.next' );
const prevArrow = document.querySelector( '.tf-carousel-arrow.prev' );

const goTo = where => {
  const isFirst = currentItem === 1;
  const isLast = currentItem === cardArray.length;

  if ( where === 'next' && !isLast ) {
    currentItem++; // eslint-disable-line no-plusplus
    toggleItems( cardArray, currentItem );
  } else if ( where === 'next' && isLast ) {
    currentItem = 1;
    toggleItems( cardArray, currentItem );
  } else if ( where === 'prev' && !isFirst ) {
    currentItem--; // eslint-disable-line no-plusplus
    toggleItems( cardArray, currentItem );
  } else if ( where === 'prev' && isFirst ) {
    currentItem = cardArray.length;
    toggleItems( cardArray, currentItem );
  }
};

nextArrow.addEventListener( 'click', () => goTo( 'next' ) );
prevArrow.addEventListener( 'click', () => goTo( 'prev' ) );

// Using buttons
const buttons = document.querySelectorAll( '.tf-button' );
const btnArray = [...buttons];

btnArray.forEach( btn => {
  const navigateToBox = () => {
    toggleItems( cardArray, btn.dataset.id );
    currentItem = Number( btn.dataset.id );
  };

  btn.addEventListener( 'click', navigateToBox );
} );
