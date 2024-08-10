import React from 'react';
import { useState } from 'react';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// const photoArr = new Array(3).fill(sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };
  const [favorites, setFavorite] = useState([]);
  const favoritesPhoto = (photoID, saved) => {
    //adding photoid into array
    if (!favorites.includes(photoID) && saved) {
      setFavorite(prev => [...prev,photoID])
      //removing photoid from array
    } else if (favorites.includes(photoID) && !saved) {
      setFavorite(prev => prev.filter(id => id !== photoID));
    }
    console.log(favorites)
  }
  
  return (
    <div className="App">
      {/* {photoArr.map((photo, index) => {
        return <>
          <PhotoListItem key={index} photo={photo} />
        </>
      }
      )} */}
      <HomeRoute photos={photos} topics={topics} openModal={openModal} favorites={favorites} favoritesPhoto={favoritesPhoto} />
      <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} favorites={favorites} favoritesPhoto={favoritesPhoto}/>
    </div>
  );
};

export default App;
