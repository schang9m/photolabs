import React from 'react';
import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import FavPhotoList from 'components/FavPhotoList';

const FavoritePhoto = (props) => {
  const { topics, handlePhotoDetails, favorites,
    fetchPhotosByTopic, handleFavBadgeClick, favoritesPhoto } = props;
  const isFavPhotoExist = favorites.length > 0;


  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        fetchPhotosByTopic={fetchPhotosByTopic}
        favorites={favorites}
        handleFavBadgeClick={handleFavBadgeClick}
      />
      <FavPhotoList
        photos={favorites}
        handlePhotoDetails={handlePhotoDetails}
        favorites={favorites}
        favoritesPhoto={favoritesPhoto}
      />
    </div>
  );
};


export default FavoritePhoto;
