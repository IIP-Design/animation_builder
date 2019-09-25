// Import any CSS/SCSS files relevant to your module at the top of the js file
import './example.scss';

const btn = document.getElementById( 'example-button' );
const img = document.getElementById( 'example-image' );

function sayHello() {
  const classes = img.classList;

  if ( classes.contains( 'hidden' ) ) {
    classes.remove( 'hidden' );
  } else {
    classes.add( 'hidden' );
  }
}

btn.addEventListener( 'click', sayHello );
