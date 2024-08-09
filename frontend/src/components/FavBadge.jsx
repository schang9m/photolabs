import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  console.log('FavBadge received isFavPhotoExist:', isFavPhotoExist); // Debugging line
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;