import React, { useState } from 'react';

import '../styles/HomeRoute.scss'

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, topics, openModal} = props;
  //set an empty array first for favorites
  const [favorites, setFavorite] = useState([]);
  const favoritesPhoto = (photoID, saved) => {
    //adding photoid into array
    if (!favorites.includes(photoID) && saved) {
      setFavorite(prev => [...prev,photoID])
      //removing photoid from array
    } else if (favorites.includes(photoID) && !saved) {
      setFavorite(prev => prev.filter(id => id !== photoID));
    }
  }
  
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} favoritesPhoto={favoritesPhoto} openModal={openModal}/>
    </div>
  )
}

export default HomeRoute;