import React from 'react';
import './App.scss';


import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// const photoArr = new Array(3).fill(sampleDataForPhotoListItem)

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

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoByTopic.length > 0 ? state.photoByTopic : state.photoData}
        topics={state.topicData}
        handlePhotoDetails={handlePhotoDetails}
        favorites={favorites}
        favoritesPhoto={updateToFavPhotoIds}
        fetchPhotosByTopic={fetchPhotosByTopic} />

      <PhotoDetailsModal
        photo={selectedPhoto}
        handlePhotoDetails={handlePhotoDetails}
        favorites={favorites}
        favoritesPhoto={updateToFavPhotoIds} />
    </div>
  );
};

export default App;
