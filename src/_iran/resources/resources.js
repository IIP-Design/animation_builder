// Import any CSS/SCSS files relevant to your module at the top of the js file
import { toggleItems } from '../../utils/toggle';

import './resources.scss';

const boxes = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.card-button');

const boxArray = [...boxes];
const btnArray = [...buttons];

btnArray.forEach(btn => {
  btn.addEventListener('click', () => toggleItems(boxArray, btn.dataset.id));
});
