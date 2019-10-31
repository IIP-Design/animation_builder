export const toggleItems = ( arr, id ) => {
  arr.forEach( box => {
    if ( box.id === id && box.classList.contains( 'hidden' ) ) {
      box.classList.remove( 'hidden' );
    } else if ( box.id !== id && !box.classList.contains( 'hidden' ) ) {
      box.classList.add( 'hidden' );
    }
  } );
};
