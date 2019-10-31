import { toggleItems } from '../../utils/toggle';

import './quiz.scss';

const boxes = document.querySelectorAll( '.true-false-slider-box' );
const buttons = document.querySelectorAll( '.true-false-button' );

const boxArray = [...boxes];
const btnArray = [...buttons];

btnArray.forEach( btn => {
  btn.addEventListener( 'click', () => toggleItems( boxArray, btn.dataset.id ) );
} );
