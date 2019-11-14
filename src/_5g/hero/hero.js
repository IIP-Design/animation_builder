import './hero.scss';

const width = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );

const bg = document.getElementById( 'hero-content-background' );

if ( bg && width < 750 ) {
  bg.setAttribute( 'style', 'background-image: none;' );
}
