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
    onPhotoSelect,
    selectedPhoto,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute photos={state.photoData} 
      topics={state.topicData} 
      openModal={onPhotoSelect} 
      favorites={favorites} 
      favoritesPhoto={updateToFavPhotoIds} 
      fetchPhotosByTopic={fetchPhotosByTopic} />

      <PhotoDetailsModal photo={selectedPhoto} 
      onClose={onClosePhotoDetailsModal} 
      favorites={favorites} 
      favoritesPhoto={updateToFavPhotoIds}/>
    </div>
  );
};

export default App;
