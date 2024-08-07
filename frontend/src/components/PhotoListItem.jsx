import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  const {id, location, imageSource, username, profile} = props.photo;
  return (
    <div className="photo-list__item">
      <img src={imageSource} 
      alt={`${username}'s picture`} 
      id={id}
      className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={profile} 
        alt={`${username}'s profile`} 
        className='photo-list__user-profile'/>

        <p className="photo-list__user-info">{username}</p>

        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
      </div>

    </div>
  )
};

export default PhotoListItem;
