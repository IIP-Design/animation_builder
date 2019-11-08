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
    const d = document.createElement( 'div' );
    const p = document.createElement( 'p' );

    const title = document.createTextNode( data.title );

    child.setAttribute( 'style', `background-image: url('${data.image}')` );

    a.setAttribute( 'href', data.link );
    a.setAttribute( 'class', 'cdp-feed-item-link' );
    p.setAttribute( 'class', 'cdp-feed-item-title' );

    p.appendChild( title );
    d.appendChild( p );
    a.appendChild( d );
    child.appendChild( a );
  } );
};
