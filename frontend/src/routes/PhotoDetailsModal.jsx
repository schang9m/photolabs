import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, onClose } = props
  if (!photo) return null;
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>

      <img src={photo.fullimg} alt={photo.id} className="photo-details-modal__image" />
      </div>

      {console.log(photo.similarPhotos)}

      <div className="photo-details-modal__photographer-details photo-details-modal__header ">
        <img src={photo.user.profile} 
        alt={`${photo.user.username}'s profile`} 
        className='photo-details-modal__photographer-profile'/>

        <p className="photo-details-modal__photographer-info">{photo.user.username}</p>

        <p className="photo-details-modal__photographer-location">{`${photo.location.city}, ${photo.location.country}`}</p>
      </div>
      <div className='photo-details-modal__images'>
        {Object.values(photo.similarPhotos).map((photo) => (
          <span key={photo.id} >
            <img src={photo.urls.regular} alt={photo.id} className='photo-details-modal__image'/>
          </span>
        ))}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
