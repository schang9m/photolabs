import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const {photos} = props
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
