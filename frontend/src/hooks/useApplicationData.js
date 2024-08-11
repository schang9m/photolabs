import { useState } from "react";

//The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.
const useApplicationData  = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const [favorites, setFavorite] = useState([]);

  const updateToFavPhotoIds = (photoID) => {
    //adding photoid into array
    if (!favorites.includes(photoID)) {
      setFavorite(prev => [...prev,photoID])
      //removing photoid from array
    } else if (favorites.includes(photoID)) {
      setFavorite(prev => prev.filter(id => id !== photoID));
    }
  }

  return {
    onPhotoSelect,
    onClosePhotoDetailsModal,
    selectedPhoto,
    favorites,
    updateToFavPhotoIds,
  };
};

export default useApplicationData;