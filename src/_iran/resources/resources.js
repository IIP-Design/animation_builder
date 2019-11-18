import { toggleItems } from '../../utils/toggle';
import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

import './resources.scss';

const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.card-button');

const sectionArray = [...sections];
const btnArray = [...buttons];

// Change Button Color on Click
const clickHandler = e => {
  toggleItems(sectionArray, e.target.id, 'hidden');
  toggleItems(btnArray, e.target.id, 'inactive');
};

btnArray.forEach(btn => {
  btn.addEventListener('click', e => clickHandler(e));
});

// Adds feed of CDP content to the block
const women = document.getElementById('resource-women-cdp-feed');
const freedom = document.getElementById('resource-freedom-cdp-feed');
const workers = document.getElementById('resource-workers-cdp-feed');

if (women && freedom && workers) {
  buildFeed(women);
  buildFeed(freedom);
  buildFeed(workers);
}
