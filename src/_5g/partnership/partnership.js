import './partnership.scss';

import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

const feed = document.getElementById( 'partnership-cdp-feed' );
const feedTwo = document.getElementById( 'partnership-cdp-feed-two' );

if ( feed ) {
  buildFeed( feed );
}

if ( feedTwo ) {
  buildFeed( feedTwo );
}
