export const toggleItems = ( arr, id, classes ) => {
  // Since the id pulled off of the DOM element is always a string,
  // we need to ensure that the id passed in is a string.
  const strId = id.toString();

  arr.forEach( item => {
    if ( item.id === strId && item.classList.contains( classes ) ) {
      item.classList.remove( classes );
    } else if ( item.id !== strId && !item.classList.contains( classes ) ) {
      item.classList.add( classes );
    }
  } );
};
