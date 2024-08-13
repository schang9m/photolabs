import React from 'react';
import { useState } from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import FavPhotoList from './FavPhotoList';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, fetchPhotosByTopic, handleFavBadgeClick } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} onClick={handleFavBadgeClick} />
    </div>
  )
}

export default TopNavigation;