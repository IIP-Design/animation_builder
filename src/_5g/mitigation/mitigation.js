import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

import './mitigation.scss';

// Adds feed of CDP content to the block
const feed = document.getElementById( 'mitigation-cdp-feed' );

if ( feed ) {
  buildFeed( feed );
}
