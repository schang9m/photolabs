import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {favoritesPhoto, id, favorites=[]} = props;
  console.log(favorites.includes(id))
  const [favorite, setFavorite] = useState(favorites.includes(id));
  const handleClick = () => {
    favoritesPhoto(id, !favorite);
    setFavorite(prevFavorite => !prevFavorite);
  }

  return (
    <div className="photo-list__fav-icon" onClick={() => handleClick()}>
      <div className="photo-list__fav-icon-svg" >
        {/* Insert React */}
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;