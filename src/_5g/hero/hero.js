import './hero.scss';

const width = Math.max( document.documentElement.clientWidth, window.innerWidth || 0 );

const bg = document.getElementById( 'hero-content-background' );

if ( bg && width < 750 ) {
  bg.setAttribute(
    'style',
    'background-image: none; background: linear-gradient(180deg, rgba(0,16,39,1) 0%, rgba(9,9,121,1) 71%, rgba(0,45,116,1) 100%);'
  );
}
