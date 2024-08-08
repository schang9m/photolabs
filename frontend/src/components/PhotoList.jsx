import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

import photos from "mocks/photos";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            username={photo.user.username}
            profile={photo.user.profile}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
