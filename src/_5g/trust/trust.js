import './trust.scss';

import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

const feed = document.getElementById('trust-cdp-feed');

if (feed) {
  buildFeed(feed);
}
