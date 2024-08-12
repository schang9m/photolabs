import React from 'react'; // Ensure React is imported
import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics, handlePhotoDetails, favoritesPhoto, favorites, fetchPhotosByTopic } = props;
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
        handlePhotoDetails={handlePhotoDetails}
        favorites={favorites}
      />
    </div>
  );
};

export default HomeRoute;
