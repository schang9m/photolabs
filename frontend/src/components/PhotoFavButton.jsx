import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, location, imageSource, user, 
    favoritesPhoto, similarPhotos,
    handlePhotoDetails, favorites  = [] } = props;

  const select = favorites.some(photo => photo.id === id);

  const handleClick = () => {
    favoritesPhoto({id, location, imageSource, user, handlePhotoDetails, similarPhotos});
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