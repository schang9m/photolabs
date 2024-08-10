import React from "react";

import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  /* Insert React */
  const {id, location, imageSource, user, favoritesPhoto, similarPhotos, openModal, favorites} = props;
  const fullimg = imageSource.full;
  const handleClick = () => {
    openModal({id, location, fullimg, user, similarPhotos})
  }
  return (
    <div className="photo-list__item" onClick={handleClick}>
      <PhotoFavButton id={id} favoritesPhoto={favoritesPhoto} favorites={favorites}/>
      <img src={imageSource.regular} 
      alt={`${user.username}'s picture`} 
      id={id}
      className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img src={user.profile} 
        alt={`${user.username}'s profile`} 
        className='photo-list__user-profile'/>

        <p className="photo-list__user-info">{user.username}</p>

        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  )
};

export default PhotoListItem;
