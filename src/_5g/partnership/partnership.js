import './partnership.scss';

import { buildFeed } from '../../utils/cdpFeed/cdpFeed';

const feed = document.getElementById( 'partnership-cdp-feed' );

if ( feed ) {
  buildFeed( feed );
}
