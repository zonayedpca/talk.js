import React from 'react';

import { LocationMap } from './common';

import './location.css';

export default () => (
  <div id="location" className="location-area">
    <LocationMap
      isMarkerShown={true}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `480px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)
