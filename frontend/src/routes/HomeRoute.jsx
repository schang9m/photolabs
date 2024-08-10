import React, { useState } from 'react';

import '../styles/HomeRoute.scss'

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, topics, openModal, favoritesPhoto, favorites} = props;
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} favoritesPhoto={favoritesPhoto} openModal={openModal} favorites={favorites}/>
    </div>
  )
}

export default HomeRoute;