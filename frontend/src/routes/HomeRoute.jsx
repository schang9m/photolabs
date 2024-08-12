import React from 'react'; // Ensure React is imported
import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, openModal, favoritesPhoto, favorites, fetchPhotosByTopic } = props;
  const isFavPhotoExist = favorites.length > 0;


  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        isFavPhotoExist={isFavPhotoExist} 
        fetchPhotosByTopic={fetchPhotosByTopic} 
      />
      <PhotoList 
        photos={photos} 
        favoritesPhoto={favoritesPhoto} 
        openModal={openModal} 
        favorites={favorites}
      />
    </div>
  );
};

export default HomeRoute;
