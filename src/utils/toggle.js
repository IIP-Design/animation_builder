export const toggleItems = ( arr, id ) => {
  // Since the id pulled off of the DOM element is always a string,
  // we need to ensure that the id passed in is a string.
  const strId = id.toString();

  arr.forEach( item => {
    if ( item.id === strId && item.classList.contains( 'hidden' ) ) {
      item.classList.remove( 'hidden' );
    } else if ( item.id !== strId && !item.classList.contains( 'hidden' ) ) {
      item.classList.add( 'hidden' );
    }
  } );
};
