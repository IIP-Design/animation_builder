// Import any CSS/SCSS files relevant to your module at the top of the js file
import './example.scss';

const btn = document.getElementById( 'example-button' );

function sayHello() {
  alert( 'Hello - JavaScript deployed!' ); // eslint-disable-line no-alert
}

btn.addEventListener( 'click', sayHello );
