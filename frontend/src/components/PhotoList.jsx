import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const {photos, favoritesPhoto, openModal} = props
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls}
            user={photo.user}
            favoritesPhoto={favoritesPhoto}
            similarPhotos={photo.similar_photos}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
