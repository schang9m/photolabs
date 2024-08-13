import React from 'react';
import './App.scss';
import { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import FavoritePhoto from 'routes/FavouritePhoto';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    favorites,
    selectedPhoto,
    updateToFavPhotoIds,
    handlePhotoDetails,
    fetchPhotosByTopic
  } = useApplicationData();

  const [showFavPhotos, setShowFavPhotos] = useState(false);
  const handleFavBadgeClick = () => {
    setShowFavPhotos(prevState => !prevState);
  };
  console.log('showFavPhotos:', showFavPhotos); // Debugging

  return (
    <div className="App">
      {/* TODO: put homeroute and favoritephoto together in a condition*/}
      {!showFavPhotos && (<HomeRoute
        photos={state.photoByTopic.length > 0 ? state.photoByTopic : state.photoData}
        topics={state.topicData}
        handlePhotoDetails={handlePhotoDetails}
        favorites={favorites}
        favoritesPhoto={updateToFavPhotoIds}
        fetchPhotosByTopic={fetchPhotosByTopic}
        handleFavBadgeClick={handleFavBadgeClick} />
      )}
      <PhotoDetailsModal
        photo={selectedPhoto}
        handlePhotoDetails={handlePhotoDetails}
        favorites={favorites}
        favoritesPhoto={updateToFavPhotoIds} />

      {showFavPhotos && (
        <FavoritePhoto
        photos={favorites}
        topics={state.topicData}
        handlePhotoDetails={handlePhotoDetails}
        favorites={favorites}
        favoritesPhoto={updateToFavPhotoIds}
        fetchPhotosByTopic={fetchPhotosByTopic}
        handleFavBadgeClick={handleFavBadgeClick} />
      )}
    </div>
  );
};

export default App;
