import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  const {id, location, imageSource, username, profile} = props;
  return (
    <>
      <img src={imageSource} 
      alt={`${username}'s picture`} 
      id={id}
      className="image"/>

      <img src={profile} 
      alt={`${username}'s profile`} 
      className='profile-image'/>

      <p>{username}</p>

      <p className="location">{`${location.city}, ${location.country}`}</p>

    </>
  )
};

export default PhotoListItem;
