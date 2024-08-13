import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const FavPhotoList = (props) => {
  const {photos, favoritesPhoto, handlePhotoDetails, favorites } = props

  return (
    <ul className="photo-list">
    {photos.map((fav) => (
        <li key={fav.id}>
          <PhotoListItem
            id={fav.id}
            location={fav.location}
            imageSource={fav.imageSource}
            user={fav.user}
            favoritesPhoto={favoritesPhoto}
            similarPhotos={fav.similarPhotos}
            handlePhotoDetails={handlePhotoDetails}
            favorites={favorites}
          />
        </li>
      ))}
    </ul>
  );
};
export default FavPhotoList;
