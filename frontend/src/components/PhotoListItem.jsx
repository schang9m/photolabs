import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, imageSource, user, favoritesPhoto, similarPhotos, handlePhotoDetails, favorites } = props;
  const { full, regular } = imageSource;
  const handleClick = () => {
    //prevent it from triggering when it's null
    if (handlePhotoDetails) {
      handlePhotoDetails({ id, location, full, user, similarPhotos })
    }
  }

  return (
    <div className="photo-list__item" >
      <PhotoFavButton id={id} favoritesPhoto={favoritesPhoto} favorites={favorites} />
      <img src={regular}
        alt={`${user.username}'s picture`}
        id={id}
        className="photo-list__image"
        onClick={handleClick} />

      <div className="photo-list__user-details">
        <img src={user.profile}
          alt={`${user.username}'s profile`}
          className='photo-list__user-profile' />
        <div className="photo-list__user-text">
          <p className="photo-list__user-info">{user.username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>

      </div>
    </div>
  )
};

export default PhotoListItem;
