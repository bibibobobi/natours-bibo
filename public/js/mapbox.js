/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmlib2NoYW4iLCJhIjoiY2t5bnowdzYxMDh0NDJ2bjJqcGVlc2M3diJ9.jXjplBDdLNedHsW5JuusIQ';

  var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/bibochan/ckyo4ff9u0yzk14qvihy0exkl',
    style: 'mapbox://styles/bibochan/ckyo133j81so714lx2au6lfy8',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 8,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
      focusAfterOpen: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
