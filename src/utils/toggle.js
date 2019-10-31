export const toggleItems = ( arr, id ) => {
  arr.forEach( item => {
    if ( item.id === id && item.classList.contains( 'hidden' ) ) {
      item.classList.remove( 'hidden' );
    } else if ( item.id !== id && !item.classList.contains( 'hidden' ) ) {
      item.classList.add( 'hidden' );
    }
  } );
};
