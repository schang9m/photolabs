import React, { useState } from 'react';

import '../styles/HomeRoute.scss'

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {
  const {photos, topics} = props;
  //set an empty array first for favorites
  const [favorites, setFavorite] = useState([]);
  const favoritesPhoto = (photoID, saved) => {
    if (!favorites.includes(photoID) && saved) {
      setFavorite(prev => [...prev,photoID])
    } else if (favorites.includes(photoID) && !saved) {
      setFavorite(prev => prev.filter(id => id !== photoID));
    }
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} favoritesPhoto={favoritesPhoto}/>
    </div>
  )
}

export default HomeRoute;