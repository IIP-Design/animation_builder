import './trust.scss';

import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

const feed = document.getElementById('trust-cdp-feed');
const feedTwo = document.getElementById('trust-cdp-feed-two');

if (feed) {
  buildFeed(feed);
}

if (feedTwo) {
  buildFeed(feedTwo);
}
