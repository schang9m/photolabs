import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { favoritesPhoto, id, favorites = [] } = props;
  const select = favorites.includes(id);
  const handleClick = () => {
    favoritesPhoto(id);
  }

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClick()}>
      <div className="photo-list__fav-icon-svg" >
        {/* Insert React */}
        <FavIcon selected={select} />
      </div>
    </div>
  );
}

export default PhotoFavButton;