// API call to the CDP to get all post data
export const getFromCDP = async ( source, id ) => {
  const formData = new FormData();

  formData.append( 'query', `(site: ${source} AND post_id: ${id})` );

  try {
    const response = await fetch( 'https://api.america.gov/v1/search', {
      method: 'POST',
      body: formData
    } );
    const result = await response.json();

    const data = result?.hits?.hits?.[0]?._source ? result.hits.hits[0]._source : {};

    console.log( data );
    return data;
  } catch ( error ) {
    console.log( 'Error:', error );
  }
};

// Parse fields required to constrtuct a field item
export const parseFeedData = async el => {
  const { id, source } = el.dataset;

  const data = await getFromCDP( source, id );

  const image = data?.thumbnail?.sizes?.small?.url ? data.thumbnail.sizes.small.url : '';
  const imageAlt = data?.thumbnail?.alt ? data.thumbnail.alt : '';
  const link = data?.link ? data.link : '';
  const title = data?.title ? data.title : '';

  return { image, imageAlt, link, title };
};

// Accepts a DOM element with children and constructs a feed component out of it
export const buildFeed = feed => {
  const { children } = feed;
  const childArray = [...children];

  childArray.forEach( async child => {
    const data = await parseFeedData( child );

    const a = document.createElement( 'a' );
    const img = document.createElement( 'img' );
    const p = document.createElement( 'p' );

    const title = document.createTextNode( data.title );

    a.setAttribute( 'href', data.link );
    a.setAttribute( 'class', 'cdp-feed-item-link' );
    img.setAttribute( 'src', data.image );
    img.setAttribute( 'alt', data.imageAlt );
    p.appendChild( title );
    p.setAttribute( 'class', 'cdp-feed-item-title' );

    a.appendChild( img );
    a.appendChild( p );
    child.appendChild( a );
  } );
};
