import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photo, onClose, favoritesPhoto, favorites } = props
  if (!photo) return null;
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>

      <img src={photo.fullimg} alt={photo.id} className="photo-details-modal__image" />
      </div>

      <PhotoFavButton id={photo.id} favoritesPhoto={favoritesPhoto} favorites={favorites}/>
      <div className="photo-details-modal__photographer-details photo-details-modal__header ">
        <img src={photo.user.profile} 
        alt={`${photo.user.username}'s profile`} 
        className='photo-details-modal__photographer-profile'/>

        <p className="photo-details-modal__photographer-info">{photo.user.username}</p>

        <p className="photo-details-modal__photographer-location">{`${photo.location.city}, ${photo.location.country}`}</p>
      </div>
      <div className='photo-details-modal__images'>
        <PhotoList photos={Object.values(photo.similarPhotos)} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
