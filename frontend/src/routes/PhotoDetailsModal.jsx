import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, onClose } = props

  if (!photo) return null;
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={onClose}/>
      </button>
        <img src={photo.fullimg} alt={photo.id} className="photo-details-modal__images" />
        <p>{photo.id}</p>
    </div>
  )
};

export default PhotoDetailsModal;
