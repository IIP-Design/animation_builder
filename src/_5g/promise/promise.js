import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

import './promise.scss';

// Adds feed of CDP content to the block
const feed = document.getElementById( 'promise-cdp-feed' );

if ( feed ) {
  buildFeed( feed );
}
