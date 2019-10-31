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

const boxArray = [...boxes];
const btnArray = [...buttons];

btnArray.forEach( btn => {
  btn.addEventListener( 'click', () => toggleItems( boxArray, btn.dataset.id ) );
} );
