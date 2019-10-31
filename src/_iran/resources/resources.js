import { toggleItems } from '../../utils/toggle';

import './resources.scss';

const sections = document.querySelectorAll( '.section' );
const buttons = document.querySelectorAll( '.card-button' );

const sectionArray = [...sections];
const btnArray = [...buttons];

btnArray.forEach( btn => {
  btn.addEventListener( 'click', () => toggleItems( sectionArray, btn.dataset.id ) );
} );
