import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(prevFavorite => !prevFavorite);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg" >
        {/* Insert React */}
        <FavIcon selected={favorite} displayAlert={favorite}/> {/* what does the displayAlert do?*/}
      </div>
    </div>
  );
}

export default PhotoFavButton;